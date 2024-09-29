import React from "react";
import IconCloud from './ui/icon-cloud';

export function Skills() {
  // Define your tech stack slugs
  const techStackSlugs = [
    'typescript', 'javascript', 'react', 'nextjs', 'nodejs', 'express',
    'mongodb', 'postgresql', 'html5', 'css3', 'sass', 'tailwindcss',
    'git', 'github', 'vscode', 'docker', 'aws', 'firebase'
  ];

  return (
    <section id="skills" className="p-4 md:p-6 bg-black bg-opacity-50 backdrop-blur-sm">
      <h2 className="text-2xl font-bold text-white mb-6">Skills</h2>
      
      {/* Icon Cloud */}
      <div className="mb-8">
        <IconCloud iconSlugs={techStackSlugs} />
      </div>

      {/* Skills list */}
      <ul className="list-disc list-inside text-gray-300 max-w-2xl mx-auto space-y-2">
        <li>Full-stack web development with React, Next.js, and Node.js</li>
        <li>Database design and management (MongoDB, PostgreSQL)</li>
        <li>RESTful API development and integration</li>
        <li>Responsive and accessible front-end design</li>
        <li>Version control with Git and GitHub</li>
        <li>Cloud deployment and serverless architecture (AWS, Firebase)</li>
      </ul>
    </section>
  );
}
