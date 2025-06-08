import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PhotoGallery } from "@/components/PhotoGallery";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { FadeText } from "@/components/ui/fade-text";
import dynamic from "next/dynamic";

const ScrollToTop = dynamic(() => import("@/components/ScrollToTop"), {
  ssr: false,
});

export default function Photography() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-grow pt-20 md:pt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <GradualSpacing
              text="Photography"
              className="text-3xl md:text-6xl font-bold text-white mb-4"
              duration={0.25}
              delayMultiple={0.07}
            />
            <FadeText
              direction="up"
              framerProps={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 1.5, // Delay to start after the header animation
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  },
                },
              }}>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                A collection of my favorite moments
              </p>
            </FadeText>
          </div>
          <PhotoGallery />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
