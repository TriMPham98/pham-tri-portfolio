import React from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const TimelineItem = ({ year, title, description, delay }) => (
  <AnimateOnScroll
    animation={{
      hidden: { opacity: 0, x: -20 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { delay, duration: 0.6, ease: "easeOut" },
      },
    }}>
    <div className="mb-8 flex w-full fade-text">
      <div className="flex flex-col items-center mr-4">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 text-white text-xl font-bold">
          {year}
        </div>
        <div className="w-1 h-full bg-gray-800 mt-2"></div>
      </div>
      <div className="bg-gray-900 rounded-lg shadow-xl px-6 py-4 w-full">
        <h3 className="mb-3 font-bold text-white text-xl">{title}</h3>
        <p className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100">
          {description}
        </p>
      </div>
    </div>
  </AnimateOnScroll>
);

export function About() {
  const timelineData = [
    {
      year: "2018",
      title: "Started Coding Journey",
      description:
        "Began learning web development through online courses and personal projects.",
    },
    {
      year: "2020",
      title: "First Developer Job",
      description:
        "Landed my first role as a junior developer at a local tech startup.",
    },
    {
      year: "2022",
      title: "Freelance Work",
      description:
        "Started taking on freelance projects, expanding my skillset and client base.",
    },
    {
      year: "2024",
      title: "Current Position",
      description:
        "Now working as a full-stack developer, continuously learning and growing in the field.",
    },
  ];

  return (
    <section
      id="about"
      className="p-4 md:p-6 bg-black bg-opacity-50 backdrop-blur-sm">
      <AnimateOnScroll
        animation={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        }}>
        <h2 className="text-3xl font-extrabold text-white text-center mb-8">
          About Me
        </h2>
      </AnimateOnScroll>

      <div className="container mx-auto w-full max-w-2xl">
        <div className="relative wrap overflow-hidden p-4 h-full">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} {...item} delay={0.2 + index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}
