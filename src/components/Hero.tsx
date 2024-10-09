"use client";

import React, { useEffect, useState } from "react";
import GradualSpacing from "./ui/gradual-spacing";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import ProfileAvatar from "./ProfileAvatar";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadLinksPreset } from "@tsparticles/preset-links";

const ParticlesComponent = () => {
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
              value: 80,
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

export function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm relative overflow-hidden">
      <ParticlesComponent />
      <div className="container mx-auto px-4 flex flex-col items-center -mt-16 relative z-10">
        <div className="mb-8">
          <ProfileAvatar />
        </div>
        <GradualSpacing
          text="Howdy, I'm Tri!"
          className="text-5xl md:text-6xl font-bold text-white mb-4 text-center"
        />
        <AnimateOnScroll
          animation={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.6, ease: "easeOut" },
            },
          }}>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl text-center">
            I design user interfaces that connect humans and machines.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
