import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export function Header() {
  return (
    <header className="p-4 md:p-6 flex flex-col md:flex-row justify-between items-center bg-black">
      <Link
        href="/"
        className="text-2xl font-bold text-white hover:text-gray-300 transition-colors mb-4 md:mb-0">
        Tri Pham
      </Link>
      <NavigationMenu>
        <NavigationMenuList className="flex flex-wrap justify-center md:space-x-6">
          <NavigationMenuItem className="mx-2 my-1 md:mx-0 md:my-0">
            <Link href="#about" legacyBehavior passHref>
              <NavigationMenuLink className="text-gray-300 hover:text-white transition-colors">
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="mx-2 my-1 md:mx-0 md:my-0">
            <Link href="#projects" legacyBehavior passHref>
              <NavigationMenuLink className="text-gray-300 hover:text-white transition-colors">
                Projects
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="mx-2 my-1 md:mx-0 md:my-0">
            <Link href="#skills" legacyBehavior passHref>
              <NavigationMenuLink className="text-gray-300 hover:text-white transition-colors">
                Skills
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="mx-2 my-1 md:mx-0 md:my-0">
            <Link href="#contact" legacyBehavior passHref>
              <NavigationMenuLink className="text-gray-300 hover:text-white transition-colors">
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
