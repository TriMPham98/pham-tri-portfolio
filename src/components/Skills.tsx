import React from "react";
import IconCloud from "./ui/icon-cloud";
import { FadeText } from "@/components/ui/fade-text";

export function Skills() {
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
      category: "Programming Languages",
      skills: "JavaScript, TypeScript, HTML/CSS, Python, C/C++, Java",
    },
    { category: "Databases", skills: "MySQL, SQLite" },
    { category: "Frameworks", skills: "React, Next.js, Vue.js, Node.js" },
    {
      category: "Developer Tools",
      skills: "Git, GitHub, VS Code, Cursor, PyCharm, CLion, Eclipse, Vercel",
    },
    {
      category: "Design Tools",
      skills: "Figma, Adobe Lightroom, Adobe Photoshop",
    },
    { category: "Libraries", skills: "shadcn/ui, Three.js, Vite, pyautogui" },
  ];

  return (
    <section id="skills" className="relative py-12">
      <div
        className="absolute inset-0 transform -translate-y-16"
        style={{
          background: `
            radial-gradient(
              circle at center,
              rgba(31, 41, 55, 0.8) 0%,
              rgba(17, 24, 39, 0.6) 25%,
              rgba(0, 0, 0, 0.8) 50%,
              rgba(0, 0, 0, 1) 75%
            )
          `,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeText
          direction="up"
          framerProps={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, type: "spring" },
            },
          }}
          text={
            <h2 className="text-3xl font-extrabold text-white text-center mb-6">
              Technical Skills
            </h2>
          }
        />

        <div className="mb-8">
          <IconCloud iconSlugs={techStackSlugs} />
        </div>

        <ul className="text-gray-300 max-w-2xl mx-auto space-y-2 text-base">
          {skillsList.map((item, index) => (
            <FadeText
              key={item.category}
              direction="up"
              framerProps={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.3 + index * 0.1, type: "spring" },
                },
              }}
              text={
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>
                    <strong>{item.category}:</strong> {item.skills}
                  </span>
                </li>
              }
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
