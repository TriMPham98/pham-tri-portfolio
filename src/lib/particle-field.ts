export interface ParticleFieldOptions {
  count: number;
  // Scale `count` to the viewport's area instead of using it as-is.
  density: boolean;
}

export interface ParticleField {
  stop: () => void;
}

// A drifting field of linked particles that reach toward the pointer, drawn
// on a 2D canvas. BackgroundParticles inlines this function's source in a
// <script> so the field starts while the HTML is still parsing, which means it
// must stay self-contained: no imports, module constants, or syntax the
// compiler would rewrite into a helper (object spread, classes, async).
export function startParticleField(
  canvas: HTMLCanvasElement,
  options: ParticleFieldOptions
): ParticleField {
  const LINK_DISTANCE = 150;
  const LINK_OPACITY = 0.15;
  const GRAB_DISTANCE = 140;
  const GRAB_OPACITY = 0.69;
  const MAX_SPEED = 20.7; // px per second
  const MIN_RADIUS = 0.69;
  const MAX_RADIUS = 1.69;
  // With density on, `count` particles fill this many square CSS pixels.
  const DENSITY_AREA = 1440 * 1440;
  // Links are batched into this many opacity levels, one stroke per level.
  const OPACITY_STEPS = 16;

  const ctx = canvas.getContext("2d");
  if (!ctx) return { stop: () => {} };

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const particles: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
  let width = 0;
  let height = 0;
  let pointer: { x: number; y: number } | null = null;
  let frame = 0;
  let lastTime = 0;

  function resize() {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    const dpr = window.devicePixelRatio || 1;
    for (const p of particles) {
      p.x *= w / width;
      p.y *= h / height;
    }
    width = w;
    height = h;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

    const target = options.density
      ? Math.round((options.count * w * h) / DENSITY_AREA)
      : options.count;
    while (particles.length < target) {
      const angle = Math.random() * 2 * Math.PI;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.cos(angle) * Math.random() * MAX_SPEED,
        vy: Math.sin(angle) * Math.random() * MAX_SPEED,
        r: MIN_RADIUS + Math.random() * (MAX_RADIUS - MIN_RADIUS),
      });
    }
    particles.length = target;
    draw();
  }

  function draw() {
    const c = ctx!;
    c.clearRect(0, 0, width, height);
    c.strokeStyle = "#ffffff";
    c.fillStyle = "#ffffff";
    c.lineWidth = 1;

    const levels: number[][] = [];
    for (let i = 0; i < particles.length; i++) {
      const a = particles[i];
      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        if (dx > LINK_DISTANCE || dx < -LINK_DISTANCE) continue;
        if (dy > LINK_DISTANCE || dy < -LINK_DISTANCE) continue;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d >= LINK_DISTANCE) continue;
        const level = Math.floor((1 - d / LINK_DISTANCE) * OPACITY_STEPS);
        if (!levels[level]) levels[level] = [];
        levels[level].push(a.x, a.y, b.x, b.y);
      }
    }
    for (let level = 0; level < levels.length; level++) {
      const lines = levels[level];
      if (!lines) continue;
      c.globalAlpha = (LINK_OPACITY * (level + 0.5)) / OPACITY_STEPS;
      c.beginPath();
      for (let k = 0; k < lines.length; k += 4) {
        c.moveTo(lines[k], lines[k + 1]);
        c.lineTo(lines[k + 2], lines[k + 3]);
      }
      c.stroke();
    }

    if (pointer) {
      for (const p of particles) {
        const d = Math.hypot(p.x - pointer.x, p.y - pointer.y);
        if (d >= GRAB_DISTANCE) continue;
        c.globalAlpha = GRAB_OPACITY * (1 - d / GRAB_DISTANCE);
        c.beginPath();
        c.moveTo(pointer.x, pointer.y);
        c.lineTo(p.x, p.y);
        c.stroke();
      }
    }

    c.globalAlpha = 1;
    c.beginPath();
    for (const p of particles) {
      c.moveTo(p.x + p.r, p.y);
      c.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
    }
    c.fill();
  }

  function step(time: number) {
    // Capped so a backgrounded tab doesn't jump the field when it returns.
    const dt = lastTime ? Math.min(time - lastTime, 100) / 1000 : 0;
    lastTime = time;
    for (const p of particles) {
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      if (p.x < -p.r) p.x = width + p.r;
      else if (p.x > width + p.r) p.x = -p.r;
      if (p.y < -p.r) p.y = height + p.r;
      else if (p.y > height + p.r) p.y = -p.r;
    }
    draw();
    frame = requestAnimationFrame(step);
  }

  function onPointerMove(e: PointerEvent) {
    if (e.pointerType !== "mouse") return;
    const rect = canvas.getBoundingClientRect();
    pointer = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    if (reduceMotion) draw();
  }

  function onPointerLeave() {
    pointer = null;
    if (reduceMotion) draw();
  }

  resize();
  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", onPointerMove, { passive: true });
  document.documentElement.addEventListener("pointerleave", onPointerLeave);
  // With reduced motion the field holds still and only redraws on input.
  if (!reduceMotion) frame = requestAnimationFrame(step);

  return {
    stop: () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
    },
  };
}
