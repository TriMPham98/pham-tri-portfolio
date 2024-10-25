"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { FadeText } from "@/components/ui/fade-text";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80; // Adjust this value based on your header height
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

  return (
    <header
      className={`p-1 sm:p-2 md:p-4 lg:p-6 flex flex-col md:flex-row justify-between items-center fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black bg-opacity-70 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}>
      <FadeText
        direction="down"
        framerProps={{
          hidden: { opacity: 0, y: -10 },
          show: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, type: "spring" },
          },
        }}>
        <Link
          href="/"
          className="text-lg sm:text-xl md:text-2xl font-bold text-white hover:text-gray-300 transition-colors mb-1 sm:mb-2 md:mb-0">
          Tri Pham
        </Link>
      </FadeText>
      <NavigationMenu>
        <NavigationMenuList className="flex flex-wrap justify-center md:space-x-6">
          {["About", "Projects", "Skills", "Contact"].map((item, index) => (
            <NavigationMenuItem
              key={item}
              className="mx-1 my-0.5 sm:my-1 md:mx-2 md:my-0">
              <FadeText
                direction="down"
                framerProps={{
                  hidden: { opacity: 0, y: -10 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.3 + index * 0.1, type: "spring" },
                  },
                }}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm md:text-base text-gray-300 hover:text-white transition-colors px-1 py-1 md:px-2 md:py-0">
                  {item}
                </button>
              </FadeText>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
