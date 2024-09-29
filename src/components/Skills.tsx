import React from "react";
import IconCloud from "./ui/icon-cloud";

export function Skills() {
  const techStackSlugs = [
    "javascript",
    "html5",
    "css3",
    "python",
    "c",
    "cplusplus",
    "java",
    "mysql",
    "react",
    "nextjs",
    "vuejs",
    "nodejs",
    "git",
    "github",
    "vscode",
    "vercel",
    "adobelightroom",
    "adobephotoshop",
  ];

  return (
    <section id="skills" className="relative py-16">
      {/* Optimized radial gradient background */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/50 via-gray-900/20 to-black"
        style={{
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
              <strong>Programming Languages:</strong> JavaScript, HTML/CSS,
              Python, C/C++, Java, MySQL
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
