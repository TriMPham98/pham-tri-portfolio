import React from "react";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import {
  Code2Icon,
  UtensilsIcon,
  GlobeIcon,
  LayoutDashboardIcon,
} from "lucide-react";
import Image from "next/image";

export function Projects() {
  const projects = [
    {
      name: "Infinite Ocean 3D Art Gallery",
      description:
        "Interactive 3D art gallery featuring art and photography, with day-night transitions, dynamic frame lighting, and audio feedback. Built with Three.js, JavaScript, Node.js, and Vercel.",
      icon: GlobeIcon,
      href: "https://github.com/TriMPham98/Infinite-Ocean-3D-Art-Gallery",
      cta: "View Project",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-50" />
      ),
    },
    {
      name: "Upscale Restaurant Landing Page",
      description:
        "Modern UI/UX restaurant landing page with responsive design, animations, and gradients. Developed using React, JavaScript, CSS, HTML, and Node.js.",
      icon: UtensilsIcon,
      href: "https://github.com/TriMPham98/fine-dining-restaurant-landing-page",
      cta: "Explore",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-50" />
      ),
    },
    {
      name: "Pokédex React App",
      description:
        "Responsive web application displaying Pokémon data from PokéAPI. Features include an interactive grid, animated sprites, and detailed information. Built with React and JavaScript.",
      icon: Code2Icon,
      href: "https://github.com/TriMPham98/pokedex",
      cta: "Learn More",
      background: (
        <div className="absolute inset-0">
          <Image
            src="/images/pokedex.png"
            alt="Pokédex App Screenshot"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-50" />
        </div>
      ),
    },
    {
      name: "Music Teacher Admin Dashboard",
      description:
        "Comprehensive web app for music lesson management and student progress tracking. Includes an interactive music note reading quiz. Developed with Next.js, Tailwind CSS, and SQLite.",
      icon: LayoutDashboardIcon,
      href: "https://github.com/TriMPham98/sjz-dashboard",
      cta: "Discover",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-50" />
      ),
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 px-4 md:px-6 bg-gradient-to-br from-gray-900 to-black mb-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white text-center mb-12">
          Projects
        </h2>
        <BentoGrid className="grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <BentoCard
              key={index}
              name={project.name}
              description={project.description}
              Icon={project.icon}
              href={project.href}
              cta={project.cta}
              className="col-span-1 h-full min-h-[250px]"
              background={project.background}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

export default Projects;
