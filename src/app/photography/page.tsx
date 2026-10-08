import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PhotoGallery } from "@/components/PhotoGallery";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { FadeText } from "@/components/ui/fade-text";
import { BackgroundParticles } from "@/components/BackgroundParticles";
import dynamic from "next/dynamic";

const ScrollToTop = dynamic(() => import("@/components/ScrollToTop"), {
  ssr: false,
});

export default function Photography() {
  return (
    <div className="relative min-h-screen flex flex-col bg-black">
      <BackgroundParticles
        count={100}
        density={false}
        id="photography-particles"
      />
      <Header />
      <main className="relative z-10 flex-grow pt-16 md:pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <GradualSpacing
              text="Photography"
              className="text-3xl md:text-6xl font-bold text-white mb-4"
              duration={0.25}
              delayMultiple={0.07}
            />
            <FadeText delay={0.9}>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Favorite Flicks of Fleeting Frames
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
