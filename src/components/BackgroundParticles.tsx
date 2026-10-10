"use client";

import { useEffect, useRef } from "react";
import { startParticleField, type ParticleField } from "@/lib/particle-field";

type FieldCanvas = HTMLCanvasElement & { particleField?: ParticleField };

// One fixed particle field behind the whole page, with a soft vignette so the
// edges recede and section text stays readable over it.
export function BackgroundParticles({
  id,
  count = 369,
  density = true,
}: {
  id: string;
  count?: number;
  density?: boolean;
}) {
  const canvasRef = useRef<FieldCanvas>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // On a full page load the inline script below has already started the
    // field; after a client-side navigation it hasn't, so start it here.
    const field = canvas.particleField ?? startParticleField(canvas, { count, density });
    delete canvas.particleField;
    return () => field.stop();
  }, [count, density]);

  // Runs as soon as the browser parses it, so the field is moving from first
  // paint instead of waiting for the page's JavaScript to load and hydrate.
  const startScript = `(function(c){c.particleField=(${startParticleField.toString()})(c,${JSON.stringify({ count, density })})})(document.getElementById(${JSON.stringify(id)}))`;

  return (
    <div aria-hidden="true" className="fixed inset-0 z-0">
      <canvas
        ref={canvasRef}
        id={id}
        className="absolute inset-0 h-full w-full"
        suppressHydrationWarning
      />
      <script dangerouslySetInnerHTML={{ __html: startScript }} suppressHydrationWarning />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.75)_100%)]" />
    </div>
  );
}
