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
    <header className="p-6 flex justify-between items-center bg-black">
      <Link
        href="/"
        className="text-2xl font-bold text-white hover:text-gray-300 transition-colors">
        Tri Pham
      </Link>
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-6">
          <NavigationMenuItem>
            <Link href="#about" legacyBehavior passHref>
              <NavigationMenuLink className="text-gray-300 hover:text-white transition-colors">
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#projects" legacyBehavior passHref>
              <NavigationMenuLink className="text-gray-300 hover:text-white transition-colors">
                Projects
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#skills" legacyBehavior passHref>
              <NavigationMenuLink className="text-gray-300 hover:text-white transition-colors">
                Skills
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
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
