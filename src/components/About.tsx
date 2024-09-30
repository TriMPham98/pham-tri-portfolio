"use client";

import React from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export function About() {
  return (
    <section
      id="about"
      className="p-4 md:p-6 bg-black bg-opacity-50 backdrop-blur-sm">
      <AnimateOnScroll
        animation={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        }}>
        <h2 className="text-3xl font-extrabold text-white text-center mb-8">
          About Me
        </h2>
      </AnimateOnScroll>

      <AnimateOnScroll
        animation={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.6, ease: "easeOut" },
          },
        }}>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui
          mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor
          neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
          Phasellus molestie magna non est bibendum non venenatis nisl tempor.
          Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor
          posuere. Praesent id metus massa, ut blandit odio.
        </p>
      </AnimateOnScroll>
    </section>
  );
}
