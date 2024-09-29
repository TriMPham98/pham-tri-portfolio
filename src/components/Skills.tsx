import React from "react";
import IconCloud from "./ui/icon-cloud";

export function Skills() {
  const techStackSlugs = [
    "adobelightroom",
    "adobephotoshop",
    "c",
    "cplusplus",
    "css3",
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
    "typescript",
    "vercel",
    "visualstudiocode",
    "vuejs",
  ];

  return (
    <section id="skills" className="relative py-16">
      {/* Modified radial gradient background with faster falloff */}
      <div
        className="absolute inset-0"
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

      {/* Content container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white text-center mb-8">
          Technical Skills
        </h2>

        {/* Icon Cloud */}
        <div className="mb-12">
          <IconCloud iconSlugs={techStackSlugs} />
        </div>

        {/* Skills list */}
        <ul className="text-gray-300 max-w-2xl mx-auto space-y-4 text-lg">
          <li className="flex items-start">
            <span className="text-green-400 mr-2">•</span>
            <span>
              <strong>Programming Languages:</strong> JavaScript, TypeScript,
              HTML/CSS, Python, C/C++, Java
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-2">•</span>
            <span>
              <strong>Databases:</strong> MySQL
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-2">•</span>
            <span>
              <strong>Frameworks:</strong> React, Next.js, Vue.js, Node.js
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-2">•</span>
            <span>
              <strong>Developer Tools:</strong> Git, GitHub, VS Code, Cursor,
              PyCharm, CLion, Eclipse, Vercel
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-2">•</span>
            <span>
              <strong>Design Tools:</strong> Adobe Lightroom and Photoshop
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-2">•</span>
            <span>
              <strong>Libraries:</strong> shadcn/ui, Three.js, Vite, pyautogui
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
