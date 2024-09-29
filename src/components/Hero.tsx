import GradualSpacing from "./ui/gradual-spacing";

export function Hero() {
  return (
    <section className="py-10 md:py-20 text-center bg-black bg-opacity-50 backdrop-blur-sm">
      <GradualSpacing
        text="Welcome to My Portfolio"
        className="text-4xl md:text-6xl font-bold text-white"
      />
      <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4 md:px-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </section>
  );
}
