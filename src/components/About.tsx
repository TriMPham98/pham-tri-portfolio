import React from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Music, Code, Camera } from "lucide-react";

const RoleCard = ({ icon: Icon, title, description }) => (
  <AnimateOnScroll
    animation={{
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    }}>
    <div className="bg-gray-900 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
      <div className="flex flex-col items-center text-center">
        <div className="bg-gray-800 p-4 rounded-full mb-6">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  </AnimateOnScroll>
);

export function About() {
  const roles = [
    {
      icon: Music,
      title: "Rock Band Instructor 🎸",
      description:
        "Empowering young musicians at San Jose Jazz - Bridges Academy Middle School, combining my passion for music education with hands-on instrument instruction and ensemble leadership.",
    },
    {
      icon: Code,
      title: "Front-End Engineer 💻",
      description:
        "Creating intuitive and responsive web experiences using modern technologies. BS in Computer Science from California State University, East Bay, with a focus on user-centric development.",
    },
    {
      icon: Camera,
      title: "Photographer 📸",
      description:
        "Capturing moments and stories through a creative lens, specializing in both digital and analog photography to create compelling visual narratives.",
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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white text-center mb-8">
            About Me
          </h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12 text-lg">
            I'm a multidisciplinary creative professional whose work spans
            across music education, software development, and visual arts. Each
            role allows me to express creativity and innovation in unique ways.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roles.map((role, index) => (
              <RoleCard key={index} {...role} />
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}

export default About;
