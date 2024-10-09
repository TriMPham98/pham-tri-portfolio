"use client";

import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadLinksPreset } from "@tsparticles/preset-links";

const ParticleLinks = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadLinksPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={{
          preset: "links",
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              opacity: 0.3,
            },
            move: {
              speed: 1,
            },
            size: {
              value: { min: 1, max: 3 },
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 169,
            },
          },
          background: {
            color: "transparent",
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
        }}
      />
    );
  }

  return null;
};

export default ParticleLinks;
