import React from "react";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { GlobeIcon, GamepadIcon, MusicIcon, ZapIcon } from "lucide-react";
import { DemoVideo } from "@/components/ui/demo-video";
import { SectionHeading, sectionClassName } from "@/components/SectionHeading";

export function Projects() {
  const projects = [
    {
      name: "Iron Man MK III Assembly",
      description:
        "Browser demo of an Iron Man MK III–inspired suit assembly: armor plates fly in and lock on, the arc reactor and eyes ignite, then you can orbit the finished suit and replay. Built with Three.js, GSAP, Vite, and TypeScript.",
      icon: ZapIcon,
      links: [
        { href: "https://iron-man-animation.vercel.app", label: "Live demo" },
        {
          href: "https://github.com/TriMPham98/iron-man-animation",
          label: "GitHub",
        },
      ],
      video: {
        src: "/videos/iron-man-animation.mp4",
        poster: "/videos/iron-man-animation-poster.webp",
        label: "Iron Man MK III Assembly demo",
      },
    },
    {
      name: "Rogue Tank Royale",
      description:
        "Roguelike tank game with 3D combat mechanics, procedurally generated levels, and strategic upgrades. Features multiple enemy types, power-up systems, and dynamic gameplay. Built with React, Three.js, and TypeScript.",
      icon: GamepadIcon,
      links: [
        { href: "https://rogue-tank-royale.vercel.app", label: "Live demo" },
        {
          href: "https://github.com/TriMPham98/rogue-tank-royale",
          label: "GitHub",
        },
      ],
      video: {
        src: "/videos/rogue-tank-royale.mp4",
        poster: "/videos/rogue-tank-royale-poster.webp",
        label: "Rogue Tank Royale gameplay demo",
      },
    },
    {
      name: "Infinite Ocean 3D Art Gallery",
      description:
        "Interactive 3D art gallery featuring art and photography, with day-night transitions, dynamic frame lighting, and audio feedback. Built with Three.js, JavaScript, Node.js, and Vercel.",
      icon: GlobeIcon,
      links: [
        {
          href: "https://infinite-ocean-3d-art-gallery.vercel.app",
          label: "Live demo",
        },
        {
          href: "https://github.com/TriMPham98/Infinite-Ocean-3D-Art-Gallery",
          label: "GitHub",
        },
      ],
      video: {
        src: "/videos/infinite-ocean.mp4",
        poster: "/videos/infinite-ocean-poster.webp",
        label: "Infinite Ocean 3D Art Gallery demo",
      },
    },
    {
      name: "Steinway MIDI Piano",
      description:
        "MIDI-controlled Steinway grand piano in Blender with live key animation driven by a Yamaha P515. Includes a Blender extension for real-time MIDI input and a Three.js web viewer. Built with Python, Blender, and JavaScript.",
      icon: MusicIcon,
      links: [
        { href: "https://steinway-blender.vercel.app", label: "Live demo" },
        {
          href: "https://github.com/TriMPham98/steinway-blender",
          label: "GitHub",
        },
      ],
      video: {
        src: "/videos/steinway-blender.mp4",
        poster: "/videos/steinway-blender-poster.webp",
        label: "Steinway MIDI Piano demo",
      },
    },
  ];

  return (
    <section id="projects" className={sectionClassName}>
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Projects"
          subtitle="Interactive 3D experiments and tools, each with a live demo you can try."
        />
        <BentoGrid className="grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((project) => (
            <BentoCard
              key={project.name}
              name={project.name}
              description={project.description}
              Icon={project.icon}
              links={project.links}
              className="col-span-1 h-full min-h-[22rem]"
              background={
                <DemoVideo
                  src={project.video.src}
                  poster={project.video.poster}
                  label={project.video.label}
                  className="scale-105 transition-transform duration-500 can-hover:group-hover:scale-110"
                />
              }
              target="_blank"
              rel="noopener noreferrer"
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

export default Projects;
