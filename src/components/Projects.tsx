import React from "react";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import {
  CodeIcon,
  RocketIcon,
  BrainCircuitIcon,
  GlobeIcon,
} from "lucide-react";

export function Projects() {
  const projects = [
    {
      name: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: CodeIcon,
      href: "#",
      cta: "View Project",
    },
    {
      name: "Project 2",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      icon: RocketIcon,
      href: "#",
      cta: "Explore",
    },
    {
      name: "Project 3",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      icon: BrainCircuitIcon,
      href: "#",
      cta: "Learn More",
    },
    {
      name: "Project 4",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      icon: GlobeIcon,
      href: "#",
      cta: "Discover",
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
        <BentoGrid className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <BentoCard
              key={index}
              name={project.name}
              description={project.description}
              Icon={project.icon}
              href={project.href}
              cta={project.cta}
              className="h-full min-h-[250px] flex flex-col justify-between"
              background={
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-50" />
              }
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

export default Projects;
