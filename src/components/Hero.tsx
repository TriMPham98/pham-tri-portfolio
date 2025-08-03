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
      <div className="container mx-auto px-4 flex flex-col items-center justify-center relative z-10 pt-0 sm:pt-8 md:pt-0 md:-mt-16 mb-24">
        <div className="flex flex-col items-center space-y-6 sm:space-y-8 -mt-16 sm:-mt-8 md:mt-0">
          <AnimateOnScroll
            animation={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}>
            <ProfileAvatar className="w-[8.75rem] h-[8.75rem] sm:w-40 sm:h-40 md:w-[12.5rem] md:h-[12.5rem] lg:w-60 lg:h-60" />
          </AnimateOnScroll>
          <GradualSpacing
            text="Howdy, I'm Tri!"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center"
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
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl text-center mb-6 sm:mb-8 md:mb-12">
              I design user interfaces that connect humans and machines.
            </p>
            <AnimateOnScroll
              animation={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4, duration: 0.6, ease: "easeOut" },
                },
              }}>
              <div className="flex justify-center">
                <Link
                  href="/files/TriPhamResume2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer">
                  <RainbowButton className="hover:scale-105 flex items-center gap-2 text-sm sm:text-base md:text-lg py-2 px-3 sm:py-2 sm:px-4 md:py-3 md:px-6">
                    <FileText
                      size={18}
                      className="sm:w-5 sm:h-5 md:w-6 md:h-6"
                    />
                    View Résumé
                  </RainbowButton>
                </Link>
              </div>
            </AnimateOnScroll>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
