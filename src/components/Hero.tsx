import GradualSpacing from "./ui/gradual-spacing";

export function Hero() {
  return (
    <section className="py-20 text-center bg-black bg-opacity-50 backdrop-blur-sm">
      <GradualSpacing
        text="Welcome to My Portfolio"
        className="text-6xl font-bold text-white"
      />
      {/* Add more content here */}
    </section>
  );
}
