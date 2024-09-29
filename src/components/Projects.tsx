import React from "react";

export function Projects() {
  return (
    <section id="projects" className="py-12 p-4 md:p-6 bg-black bg-opacity-50 backdrop-blur-sm">
      <h2 className="text-3xl font-extrabold text-white text-center mb-8">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl font-semibold text-white mb-2">Project 1</h3>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl font-semibold text-white mb-2">Project 2</h3>
          <p className="text-gray-300">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  );
}
