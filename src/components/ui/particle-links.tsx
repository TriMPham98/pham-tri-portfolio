"use client";

import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadLinksPreset } from "@tsparticles/preset-links";
import type { ISourceOptions, Engine } from "@tsparticles/engine";

interface ParticleLinksProps {
  className?: string;
  count?: number;
  density?: boolean;
  id?: string;
}

const ParticleLinks: React.FC<ParticleLinksProps> = ({
  className,
  count = 369,
  density = true,
  id = "particles",
}) => {
  const [init, setInit] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    setEnabled(true);

    let cancelled = false;
    initParticlesEngine(async (engine: Engine) => {
      await loadLinksPreset(engine);
    }).then(() => {
      if (!cancelled) setInit(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const options = useMemo<ISourceOptions>(
    () => ({
      preset: "links",
      fpsLimit: 60,
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      background: {
        color: "transparent",
      },
      particles: {
        number: {
          value: count,
          density: {
            enable: density,
          },
        },
        color: {
          value: "#ffffff",
        },
        links: {
          enable: true,
          color: "#ffffff",
          opacity: 0.15,
        },
        move: {
          enable: true,
          speed: 0.69,
        },
        size: {
          value: { min: 0.69, max: 1.69 },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.69,
            },
          },
        },
      },
    }),
    [count, density]
  );

  if (!enabled || !init) {
    return null;
  }

  return (
    <div className={className} data-particle-count={count}>
      <Particles id={id} options={options} className="absolute inset-0 h-full w-full" />
    </div>
  );
};

export default ParticleLinks;
