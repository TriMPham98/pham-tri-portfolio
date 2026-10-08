"use client";

import React from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { SectionHeading, sectionClassName } from "@/components/SectionHeading";
import { SocialIcon } from "@/components/SocialIcon";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { email, socialLinks } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className={sectionClassName}>
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="Let's Build Something"
          subtitle="Thanks for spending your time getting to know me. I'm always open to new opportunities and collaborations, so feel free to reach out."
        />

        <AnimateOnScroll
          className="flex flex-col items-center gap-8"
          animation={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.15, duration: 0.6, ease: "easeOut" },
            },
          }}>
          <RainbowButton
            asChild
            className="h-auto gap-2 px-6 py-3 text-base hover:scale-105 md:text-lg">
            <a href={`mailto:${email}`}>
              <SocialIcon label="Email" />
              Say hello
            </a>
          </RainbowButton>

          <ul className="flex flex-wrap justify-center gap-3">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-gray-200 transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white">
                  <SocialIcon label={link.label} />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
