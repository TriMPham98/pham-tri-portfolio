import { Header } from "@/components/Header";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import dynamic from "next/dynamic";

const DynamicHero = dynamic(
  () => import("@/components/Hero").then((mod) => mod.Hero),
  {
    loading: () => (
      <div className="h-screen bg-black bg-opacity-50 backdrop-blur-sm"></div>
    ),
  }
);

const DynamicAbout = dynamic(
  () => import("@/components/About").then((mod) => mod.About),
  {
    loading: () => (
      <div className="h-96 bg-black bg-opacity-50 backdrop-blur-sm"></div>
    ),
  }
);

const DynamicSkills = dynamic(
  () => import("@/components/Skills").then((mod) => mod.Skills),
  {
    loading: () => <div className="h-96"></div>,
  }
);

const DynamicContact = dynamic(
  () => import("@/components/Contact").then((mod) => mod.Contact),
  {
    loading: () => (
      <div className="h-96 bg-gradient-to-br from-gray-900 to-black"></div>
    ),
  }
);

const ScrollToTop = dynamic(() => import("@/components/ScrollToTop"), {
  ssr: false,
});

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20 md:pt-24"> {/* Added padding-top */}
        <DynamicHero />
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
