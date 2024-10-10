"use client";

import React from "react";
import Link from "next/link";
import GradualSpacing from "./ui/gradual-spacing";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import ProfileAvatar from "./ProfileAvatar";
import ParticleLinks from "@/components/ui/particle-links";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { FileText } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <ParticleLinks className="absolute inset-0" />
      <div className="container mx-auto px-4 flex flex-col items-center relative z-10">
        <div className="flex flex-col items-center mb-8">
          <ProfileAvatar />
        </div>
        <GradualSpacing
          text="Howdy, I'm Tri!"
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 text-center"
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
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl text-center mb-8">
            I design user interfaces that connect humans and machines.
          </p>
          <div className="flex justify-center">
            <Link
              href="/files/Tri-Pham-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer">
              <RainbowButton className="hover:scale-105 flex items-center gap-2">
                <FileText size={18} />
                View Résumé
              </RainbowButton>
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
