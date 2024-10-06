"use client";

import React from "react";
import GradualSpacing from "./ui/gradual-spacing";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export function Hero() {
  return (
    <section className="py-10 md:py-20 text-center bg-black bg-opacity-50 backdrop-blur-sm">
      <GradualSpacing
        text="Howdy, I'm Tri!"
        className="text-4xl md:text-6xl font-bold text-white"
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
        <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4 md:px-0">
          I design user interfaces that connect humans and machines.
        </p>
      </AnimateOnScroll>
    </section>
  );
}
