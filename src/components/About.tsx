import React from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const TimelineItem = ({ year, title, description, isEven }) => (
  <AnimateOnScroll
    animation={{
      hidden: { opacity: 0, x: isEven ? 20 : -20 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    }}>
    <div
      className={`mb-12 flex w-full items-center justify-center ${
        isEven ? "flex-row-reverse" : "flex-row"
      }`}>
      <div className={`w-5/12 ${isEven ? "text-right" : "text-left"}`}>
        <div
          className={`p-6 bg-gray-900 rounded-lg shadow-xl ${
            isEven ? "ml-auto" : "mr-auto"
          }`}>
          <h3 className="mb-3 font-bold text-white text-2xl">{title}</h3>
          <p className="text-base leading-relaxed tracking-wide text-gray-300">
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center mx-8">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 text-white text-xl font-bold">
          {year}
        </div>
        <div className="w-1 h-32 bg-gray-800 mt-2"></div>
      </div>
      <div className="w-5/12"></div>
    </div>
  </AnimateOnScroll>
);

export function About() {
  const timelineData = [
    {
      year: "2019",
      title: "Started Computer Science Journey",
      description:
        "Began my academic journey in Computer Science at De Anza College, laying the foundation for my future in technology.",
    },
    {
      year: "2022",
      title: "Advanced Education & Career Start",
      description:
        "Transferred to California State University, East Bay to pursue a Bachelor of Science in Computer Science. Simultaneously, I began my role as a Rock Band Instructor at San Jose Jazz - Bridges Academy Middle School, combining my passion for music and education.",
    },
    {
      year: "2023",
      title: "Expanding Skills & Projects",
      description:
        "Developed the 'Infinite Ocean' 3D art gallery using JavaScript and Three.js, showcasing my growing expertise in web development and interactive design. Also started as a Freelance Photographer, enhancing my visual design skills.",
    },
    {
      year: "2024",
      title: "Diversifying Portfolio & Graduation",
      description:
        "Created multiple projects including an Upscale Restaurant Landing Page, a Pokédex React App, and a Music Teacher Admin Dashboard, demonstrating proficiency in various technologies like React, Next.js, and SQLite. Graduated with a BS in Computer Science from Cal State East Bay.",
    },
  ];

  return (
    <section
      id="about"
      className="p-4 md:p-8 bg-black bg-opacity-50 backdrop-blur-sm">
      <AnimateOnScroll
        animation={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        }}>
        <h2 className="text-4xl font-extrabold text-white text-center mb-12">
          About Me
        </h2>
      </AnimateOnScroll>

      <div className="container mx-auto w-full max-w-6xl">
        <div className="relative wrap overflow-hidden p-4 h-full">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} {...item} isEven={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
