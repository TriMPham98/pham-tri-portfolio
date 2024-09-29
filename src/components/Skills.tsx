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
    <section
      id="skills"
      className="p-4 md:p-6 bg-gradient-to-b from-black via-gray-900 to-black backdrop-blur-sm">
      <h2 className="text-2xl font-bold text-white mb-6">Technical Skills</h2>

      {/* Icon Cloud */}
      <div className="mb-8">
        <IconCloud iconSlugs={techStackSlugs} />
      </div>

      {/* Updated Skills list */}
      <ul className="list-disc list-inside text-gray-300 max-w-2xl mx-auto space-y-2">
        <li>
          Programming Languages: JavaScript, HTML/CSS, Python, C/C++, Java,
          MySQL
        </li>
        <li>Frameworks: React, Next.js, Vue.js, Node.js</li>
        <li>
          Developer Tools: Git, GitHub, VS Code, Cursor, PyCharm, CLion,
          Eclipse, Vercel
        </li>
        <li>Design Tools: Adobe Lightroom and Photoshop</li>
        <li>Libraries: shadcn/ui, Three.js, Vite, pyautogui</li>
      </ul>
    </section>
  );
}
