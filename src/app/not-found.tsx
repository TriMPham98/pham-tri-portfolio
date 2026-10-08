import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-black">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center px-4 pt-20 md:pt-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
          404
        </p>
        <h1 className="mt-4 text-3xl sm:text-5xl font-bold text-white">
          This page wandered off.
        </h1>
        <p className="mt-4 max-w-md text-gray-300">
          The link may be old or mistyped. Try the home page or the photography
          gallery instead.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="px-6 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors">
            Back home
          </Link>
          <Link
            href="/photography"
            className="px-6 py-2 rounded-full border border-white text-white hover:border-gray-200 hover:text-gray-200 transition-colors">
            See photography
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
