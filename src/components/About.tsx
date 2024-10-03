import React from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const TimelineItem = ({ year, title, description }) => (
  <div className="mb-8 flex justify-between items-center w-full">
    <div className="order-1 w-5/12"></div>
    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
      <h1 className="mx-auto font-semibold text-lg text-white">{year}</h1>
    </div>
    <div className="order-1 bg-gray-900 rounded-lg shadow-xl w-5/12 px-6 py-4">
      <h3 className="mb-3 font-bold text-white text-xl">{title}</h3>
      <p className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100">
        {description}
      </p>
    </div>
  </div>
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

      <AnimateOnScroll
        animation={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.6, ease: "easeOut" },
          },
        }}>
        <div className="container mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div
              className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
              style={{ left: "50%" }}></div>
            {timelineData.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
