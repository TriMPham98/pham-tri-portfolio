"use client";

import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadLinksPreset } from "@tsparticles/preset-links";
import type { ISourceOptions, Engine } from "@tsparticles/engine";

const ParticleLinks = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadLinksPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = {
    preset: "links",
    background: {
      color: "transparent",
    },
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
        },
      },
      color: {
        value: "#ffffff",
      },
      links: {
        enable: true,
        color: "#ffffff",
        opacity: 0.3,
      },
      move: {
        enable: true,
        speed: 1,
      },
      size: {
        value: { min: 1, max: 3 },
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
            opacity: 0.5,
          },
        },
      },
    },
  };

  if (init) {
    return <Particles id="tsparticles" options={options} />;
  }

  return null;
};

export default ParticleLinks;
