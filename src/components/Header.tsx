import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { FadeText } from "@/components/ui/fade-text";

export function Header() {
  return (
    <header className="p-4 md:p-6 flex flex-col md:flex-row justify-between items-center bg-black">
      <FadeText
        direction="down"
        framerProps={{
          hidden: { opacity: 0, y: -10 },
          show: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, type: "spring" },
          },
        }}
        text={
          <Link
            href="/"
            className="text-2xl font-bold text-white hover:text-gray-300 transition-colors mb-4 md:mb-0">
            Tri Pham
          </Link>
        }
      />
      <NavigationMenu>
        <NavigationMenuList className="flex flex-wrap justify-center md:space-x-6">
          {["About", "Projects", "Skills", "Contact"].map((item, index) => (
            <NavigationMenuItem
              key={item}
              className="mx-2 my-1 md:mx-0 md:my-0">
              <FadeText
                direction="down"
                framerProps={{
                  hidden: { opacity: 0, y: -10 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.3 + index * 0.1, type: "spring" },
                  },
                }}
                text={
                  <Link href={`#${item.toLowerCase()}`} legacyBehavior passHref>
                    <NavigationMenuLink className="text-gray-300 hover:text-white transition-colors px-2 py-1 md:px-0 md:py-0">
                      {item}
                    </NavigationMenuLink>
                  </Link>
                }
              />
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
