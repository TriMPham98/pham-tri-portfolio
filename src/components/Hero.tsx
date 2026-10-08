import React from "react";
import GradualSpacing from "./ui/gradual-spacing";
import { FadeText } from "@/components/ui/fade-text";
import ProfileAvatar from "./ProfileAvatar";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { FileText } from "lucide-react";

// Entrance animations here are CSS, so the hero is fully visible from the
// server HTML even before React hydrates.
export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] items-center justify-center px-4 pb-16 md:min-h-[calc(100svh-5rem)]">
      <div className="flex flex-col items-center space-y-6 sm:space-y-8">
        <FadeText>
          <ProfileAvatar className="h-36 w-36 shadow-[0_0_60px_-10px_rgba(255,255,255,0.35)] sm:h-40 sm:w-40 md:h-[12.5rem] md:w-[12.5rem] lg:h-60 lg:w-60" />
        </FadeText>
        <GradualSpacing
          text="Howdy, I'm Tri!"
          className="text-4xl font-bold text-white text-center sm:text-5xl lg:text-6xl"
        />
        <FadeText delay={0.5}>
          <p className="max-w-2xl text-center text-lg text-gray-300 sm:text-xl lg:text-2xl">
            I design user interfaces that connect humans and machines.
          </p>
        </FadeText>
        <FadeText delay={0.7} className="pt-2 sm:pt-4">
          <RainbowButton
            asChild
            className="h-auto gap-2 px-5 py-3 text-base hover:scale-105 md:px-6 md:text-lg">
            <a
              href="/files/TriPhamResume2026.pdf"
              target="_blank"
              rel="noopener noreferrer">
              <FileText aria-hidden="true" className="h-5 w-5 md:h-6 md:w-6" />
              View Résumé
            </a>
          </RainbowButton>
        </FadeText>
      </div>
    </section>
  );
}
