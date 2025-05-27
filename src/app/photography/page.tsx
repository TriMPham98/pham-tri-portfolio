import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PhotoGallery } from "@/components/PhotoGallery";
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Photography Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Capturing moments through my lens - a collection of my favorite
              photographs
            </p>
          </div>
          <PhotoGallery />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
