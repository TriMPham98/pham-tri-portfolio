"use client";

import React from "react";
import dynamic from "next/dynamic";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { SectionHeading, sectionClassName } from "@/components/SectionHeading";

// The cloud draws on a canvas, so only it waits for the browser; the skills
// list below stays in the server-rendered HTML.
const IconCloud = dynamic(() => import("./ui/icon-cloud"), {
  ssr: false,
  loading: () => <div className="aspect-square w-full" />,
});

const techStackSlugs = [
  "adobelightroom",
  "adobephotoshop",
  "c",
  "cplusplus",
  "css3",
  "figma",
  "git",
  "github",
  "html5",
  "java",
  "javascript",
  "mysql",
  "nextdotjs",
  "nodejs",
  "python",
  "react",
  "sqlite",
  "typescript",
  "vercel",
  "visualstudiocode",
  "vuejs",
];

const skillGroups = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "HTML", "CSS", "Python", "C", "C++", "Java"],
  },
  {
    category: "Web Development",
    skills: ["React", "Vue.js", "Node.js", "Next.js"],
  },
  {
    category: "Libraries and Tools",
    skills: ["Three.js", "shadcn/ui", "Vite", "pyautogui"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "SQLite"],
  },
  {
    category: "Version Control and Deployment",
    skills: ["Git", "GitHub", "Vercel"],
  },
  {
    category: "Editors and IDEs",
    skills: ["Visual Studio Code", "Cursor", "PyCharm", "CLion", "Eclipse"],
  },
  {
    category: "Design and Creative",
    skills: ["Figma", "Adobe Lightroom", "Adobe Photoshop"],
  },
];

export function Skills() {
  return (
    <section id="skills" className={sectionClassName}>
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="Technical Skills" />

        <AnimateOnScroll
          className="mx-auto mb-16 max-w-xl"
          animation={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}>
          <NeonGradientCard
            className="animate-neon-pulse"
            borderSize={2}
            borderRadius={20}
            neonColors={{ firstColor: "#4ade80", secondColor: "#3b82f6" }}>
            <div className="cursor-grab active:cursor-grabbing">
              <IconCloud iconSlugs={techStackSlugs} />
            </div>
          </NeonGradientCard>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <AnimateOnScroll
              key={group.category}
              animation={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: (index % 2) * 0.1,
                    duration: 0.5,
                    ease: "easeOut",
                  },
                },
              }}>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-green-400">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-200 transition-colors duration-200 hover:border-white/30 hover:bg-white/10 hover:text-white">
                    {skill}
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
