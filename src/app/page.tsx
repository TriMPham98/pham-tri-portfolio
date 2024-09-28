import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import RetroGrid from "@/components/ui/retro-grid";

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <RetroGrid className="fixed inset-0" />
      <div className="relative z-10">
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
