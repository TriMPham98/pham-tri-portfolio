import React from "react";
import Link from "next/link";

export function Contact() {
  return (
    <section
      id="contact"
      className="p-4 md:p-6 bg-black bg-opacity-50 backdrop-blur-sm">
      <h2 className="text-2xl font-bold text-white mb-6">Contact Me</h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-6">
        Feel free to reach out to me through any of the following platforms. I'm
        always open to new opportunities and connections!
      </p>
      <div className="flex justify-center space-x-6">
        <Link
          href="mailto:trimpham98@gmail.com"
          className="text-blue-400 hover:text-blue-300 transition-colors"
          target="_blank"
          rel="noopener noreferrer">
          Email
        </Link>
        <Link
          href="https://github.com/TriMPham98"
          className="text-blue-400 hover:text-blue-300 transition-colors"
          target="_blank"
          rel="noopener noreferrer">
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/pham-tri/"
          className="text-blue-400 hover:text-blue-300 transition-colors"
          target="_blank"
          rel="noopener noreferrer">
          LinkedIn
        </Link>
        <Link
          href="https://x.com/TriMPham98"
          className="text-blue-400 hover:text-blue-300 transition-colors"
          target="_blank"
          rel="noopener noreferrer">
          X (Twitter)
        </Link>
      </div>
    </section>
  );
}
