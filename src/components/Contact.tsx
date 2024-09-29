import React from "react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="p-4 md:p-6 bg-black bg-opacity-50 backdrop-blur-sm">
      <h2 className="text-2xl font-bold text-white mb-6">Contact Me</h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="flex justify-center space-x-6">
        <Link href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
          Email
        </Link>
        <Link href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
          LinkedIn
        </Link>
        <Link href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
          GitHub
        </Link>
      </div>
    </section>
  );
}
