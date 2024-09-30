import { Header } from "@/components/Header";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import dynamic from "next/dynamic";

const DynamicHero = dynamic(
  () => import("@/components/Hero").then((mod) => mod.Hero),
  {
    ssr: false,
  }
);

const DynamicAbout = dynamic(
  () => import("@/components/About").then((mod) => mod.About),
  {
    ssr: false,
  }
);

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
        <DynamicHero />
        <section id="about">
          <DynamicAbout />
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
