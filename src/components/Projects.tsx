import React from "react";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import {
  Code2Icon,
  UtensilsIcon,
  GlobeIcon,
  LayoutDashboardIcon,
  GamepadIcon,
  PuzzleIcon,
  MusicIcon,
} from "lucide-react";
import Image from "next/image";
import Marquee from "@/components/ui/marquee";

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
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/infinite-ocean.png"
            alt="Infinite Ocean 3D Art Gallery Screenshot"
            layout="fill"
            objectFit="cover"
            className="transform scale-105 hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 to-black/70" />
        </div>
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
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/pokedex.png"
            alt="Pokédex App Screenshot"
            layout="fill"
            objectFit="cover"
            className="transform scale-105 hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 to-black/70" />
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
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/sjz-dashboard.png"
            alt="Music Teacher Admin Dashboard Screenshot"
            layout="fill"
            objectFit="cover"
            className="transform scale-105 hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 to-black/70" />
        </div>
      ),
    },
  ];

  const funProjects = [
    {
      name: "Keyboard Drum Set",
      icon: GamepadIcon,
      href: "https://github.com/TriMPham98/javascript-drum-set",
    },
    {
      name: "Wordle",
      icon: PuzzleIcon,
      href: "https://github.com/TriMPham98/wordle",
    },
    {
      name: "3-D Earth",
      icon: GlobeIcon,
      href: "https://github.com/TriMPham98/threejs-earth",
    },
    {
      name: "MP3 Visualizer",
      icon: MusicIcon,
      href: "https://github.com/TriMPham98/mp3-audio-visualizer",
    },
    {
      name: "Upscale Restaurant",
      icon: UtensilsIcon,
      href: "https://github.com/TriMPham98/fine-dining-restaurant-landing-page",
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
              className="col-span-1 h-full min-h-[250px] group"
              background={project.background}
              target="_blank"
              rel="noopener noreferrer"
            />
          ))}
        </BentoGrid>
        {/* Fun Projects Section */}
        <div className="mt-16 overflow-hidden rounded-xl">
          <Marquee className="py-4 bg-gradient-to-r from-gray-900 to-black">
            {funProjects.map((project, index) => (
              <a
                key={index}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 mx-8 text-gray-300 hover:text-white transition-colors duration-300">
                <project.icon className="w-6 h-6" />
                <span className="text-lg font-semibold">{project.name}</span>
              </a>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default Projects;
