import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { BackgroundParticles } from "@/components/BackgroundParticles";
import dynamic from "next/dynamic";

const DynamicAbout = dynamic(
  () => import("@/components/About").then((mod) => mod.About),
  {
    loading: () => <div className="h-96" />,
  }
);

const DynamicSkills = dynamic(
  () => import("@/components/Skills").then((mod) => mod.Skills),
  {
    loading: () => <div className="h-96" />,
  }
);

const DynamicContact = dynamic(
  () => import("@/components/Contact").then((mod) => mod.Contact),
  {
    loading: () => <div className="h-96" />,
  }
);

const ScrollToTop = dynamic(() => import("@/components/ScrollToTop"), {
  ssr: false,
});

export default function Portfolio() {
  return (
    <div className="relative flex min-h-screen flex-col bg-black">
      <BackgroundParticles id="particles" />
      <Header />
      <main className="relative z-10 flex-grow pt-16 md:pt-20">
        <Hero />
        <DynamicAbout />
        <Projects />
        <DynamicSkills />
        <DynamicContact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
