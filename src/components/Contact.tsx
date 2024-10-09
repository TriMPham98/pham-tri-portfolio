"use client";

import React from "react";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="p-4 md:p-6 bg-black bg-opacity-50 backdrop-blur-sm">
      <AnimateOnScroll
        animation={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        }}>
        <h2 className="text-3xl font-extrabold text-white text-center mb-8">
          Contact Me
        </h2>
      </AnimateOnScroll>

      <AnimateOnScroll
        animation={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.6, ease: "easeOut" },
          },
        }}>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6">
          Thanks for spending your time to get to know me. Please feel free to
          connect through any of the following platforms. I'm always open to new
          opportunities and collaborations!
        </p>
      </AnimateOnScroll>

      <AnimateOnScroll
        animation={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.4, duration: 0.6, ease: "easeOut" },
          },
        }}>
        <div className="flex justify-center space-x-6">
          <Link
            href="mailto:trimpham98@gmail.com"
            className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
            target="_blank"
            rel="noopener noreferrer">
            <Mail className="mr-2" size={20} />
            Email
          </Link>
          <Link
            href="https://github.com/TriMPham98"
            className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
            target="_blank"
            rel="noopener noreferrer">
            <Github className="mr-2" size={20} />
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/pham-tri/"
            className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
            target="_blank"
            rel="noopener noreferrer">
            <Linkedin className="mr-2" size={20} />
            LinkedIn
          </Link>
          <Link
            href="https://x.com/TriMPham98"
            className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
            target="_blank"
            rel="noopener noreferrer">
            <Twitter className="mr-2" size={20} />X (Twitter)
          </Link>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
