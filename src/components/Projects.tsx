export function Projects() {
  return (
    <section className="py-8 md:py-10 bg-black bg-opacity-50 backdrop-blur-sm px-4 md:px-0">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4">My Projects</h2>
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Project 1</h3>
          <p className="text-gray-300 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Project 2</h3>
          <p className="text-gray-300 text-sm md:text-base">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  );
}
