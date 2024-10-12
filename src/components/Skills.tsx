"use client";

import React, { useEffect, useState } from "react";
import IconCloud from "./ui/icon-cloud";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import ParticleLinks from "@/components/ui/particle-links";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";

export function Skills() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    "nextjs",
    "nodejs",
    "python",
    "react",
    "sqlite",
    "typescript",
    "vercel",
    "visualstudiocode",
    "vuejs",
  ];

  const skillsList = [
    {
      category: "Programming Languages and Web Technologies",
      skills: "JavaScript, TypeScript, HTML, CSS, Python, C, C++, Java",
    },
    {
      category: "Web Development",
      skills: "React, Vue.js, Node.js, Next.js",
    },
    {
      category: "Databases",
      skills: "MySQL, SQLite",
    },
    {
      category: "Version Control and Deployment",
      skills: "Git, GitHub, Vercel",
    },
    {
      category: "Development Tools and IDEs",
      skills: "Visual Studio Code, Cursor, PyCharm, CLion, Eclipse",
    },
    {
      category: "Design and Creative Tools",
      skills: "Figma, Adobe Lightroom, Adobe Photoshop",
    },
    {
      category: "Libraries and Additional Tools",
      skills: "shadcn/ui, Three.js, Vite, pyautogui",
    },
  ];

  if (!mounted) {
    return null; // or a loading placeholder
  }

  return (
    <section id="skills" className="relative py-12">
      <ParticleLinks className="absolute inset-0" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Technical Skills
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll
          animation={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}>
          <NeonGradientCard
            className="mb-12 animate-neon-pulse max-w-2xl mx-auto"
            borderSize={2}
            borderRadius={20}
            neonColors={{ firstColor: "#4ade80", secondColor: "#3b82f6" }}>
            <div className="p-4 cursor-pointer">
              <IconCloud
                iconSlugs={techStackSlugs}
                onIconClick={(slug) => console.log(`Clicked on ${slug}`)}
                // Remove the className prop from here
              />
            </div>
          </NeonGradientCard>
        </AnimateOnScroll>

        <ul className="text-gray-300 max-w-2xl mx-auto space-y-2 text-base mb-12">
          {skillsList.map((item, index) => (
            <AnimateOnScroll
              key={item.category}
              animation={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.1,
                    duration: 0.6,
                    ease: "easeOut",
                  },
                },
              }}>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span>
                  <strong>{item.category}:</strong> {item.skills}
                </span>
              </li>
            </AnimateOnScroll>
          ))}
        </ul>
      </div>
    </section>
  );
}
