export function Contact() {
  return (
    <section className="py-8 md:py-10 bg-black bg-opacity-50 backdrop-blur-sm px-4 md:px-0">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Contact Me</h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-4 text-sm md:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="text-blue-400 hover:text-blue-300 text-sm md:text-base">Email</a>
        <a href="#" className="text-blue-400 hover:text-blue-300 text-sm md:text-base">LinkedIn</a>
        <a href="#" className="text-blue-400 hover:text-blue-300 text-sm md:text-base">GitHub</a>
      </div>
    </section>
  );
}
