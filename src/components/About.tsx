import React from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const TimelineItem = ({ year, title, description }) => (
  <AnimateOnScroll
    animation={{
      hidden: { opacity: 0, x: -20 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    }}>
    <div className="mb-12 flex w-full items-start">
      <div className="flex flex-col items-center mr-4">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 text-white text-xl font-bold">
          {year}
        </div>
        <div className="w-1 h-full bg-gray-800 mt-2"></div>
      </div>
      <div className="flex-1">
        <div className="p-6 bg-gray-900 rounded-lg shadow-xl">
          <h3 className="mb-3 font-bold text-white text-2xl text-left">
            {title}
          </h3>
          <p className="text-base leading-relaxed tracking-wide text-gray-300 text-left">
            {description}
          </p>
        </div>
      </div>
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
      title: "Expanded Career Experience",
      description:
        "Started as a Freelance Photographer, broadening my professional skill set and gaining experience in visual arts alongside my technical studies.",
    },
    {
      year: "2024",
      title: "Graduation",
      description:
        "Graduated with a BS in Computer Science from California State University, East Bay, marking a significant milestone in my academic and professional journey.",
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

      <div className="container mx-auto w-full max-w-3xl">
        <div className="relative wrap overflow-hidden p-4 h-full">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
