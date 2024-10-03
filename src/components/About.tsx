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
      year: "2018",
      title: "Started Coding Journey",
      description:
        "Embarked on my web development journey, diving deep into online courses and tackling personal projects with enthusiasm. This period was marked by rapid learning and the excitement of creating my first web applications.",
    },
    {
      year: "2020",
      title: "First Developer Job",
      description:
        "Secured my first role as a junior developer at an innovative local tech startup. This opportunity allowed me to apply my skills in a professional setting, collaborate with experienced developers, and contribute to real-world projects.",
    },
    {
      year: "2022",
      title: "Freelance Work",
      description:
        "Ventured into the world of freelancing, taking on diverse projects that challenged me to expand my skillset. This phase was crucial in developing my client communication skills and adapting to various project requirements and technologies.",
    },
    {
      year: "2024",
      title: "Current Position",
      description:
        "Now thriving as a full-stack developer, I continue to push the boundaries of my expertise. My focus is on staying at the forefront of web technologies, mentoring junior developers, and contributing to cutting-edge projects that make a real impact.",
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
