import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import dynamic from "next/dynamic";

const DynamicSkills = dynamic(
  () => import("@/components/Skills").then((mod) => mod.Skills),
  {
    ssr: false,
  }
);

const DynamicContact = dynamic(
  () => import("@/components/Contact").then((mod) => mod.Contact),
  {
    ssr: false,
  }
);

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <DynamicSkills />
        </section>
        <section id="contact">
          <DynamicContact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
