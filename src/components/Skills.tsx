import IconCloud from './ui/icon-cloud';

export function Skills() {
  // Define your tech stack slugs
  const techStackSlugs = [
    'typescript', 'javascript', 'react', 'nextjs', 'nodejs', 'express',
    'mongodb', 'postgresql', 'html5', 'css3', 'sass', 'tailwindcss',
    'git', 'github', 'vscode', 'docker', 'aws', 'firebase'
  ];

  return (
    <section className="py-8 md:py-10 bg-black bg-opacity-50 backdrop-blur-sm px-4 md:px-0">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4 text-center">My Skills</h2>
      
      {/* Icon Cloud */}
      <div className="mb-8">
        <IconCloud iconSlugs={techStackSlugs} />
      </div>

      {/* Skills list */}
      <ul className="list-disc list-inside text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
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
