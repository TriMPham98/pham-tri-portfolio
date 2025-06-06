import React from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Music, Code, Camera } from "lucide-react";

interface RoleCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  backgroundImage?: string;
  delay?: number;
}

const RoleCard: React.FC<RoleCardProps> = ({
  icon: Icon,
  title,
  description,
  backgroundImage,
  delay = 0,
}) => (
  <AnimateOnScroll
    animation={{
      hidden: { opacity: 0, x: -20 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
          delay: delay,
        },
      },
    }}>
    <div
      className={`bg-gray-900 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-[36rem] relative overflow-hidden ${
        backgroundImage ? "bg-cover bg-center" : ""
      }`}
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.69), rgba(17, 24, 39, 0.69)), url(${backgroundImage})`,
            }
          : undefined
      }>
      <div className="flex flex-col items-center text-center h-full relative z-10">
        <div className="bg-gray-800/80 p-5 rounded-full mb-6 backdrop-blur-sm">
          <Icon className="w-12 h-12 text-white" />
        </div>
        <h3 className="text-3xl font-bold text-white mb-6">{title}</h3>
        <p className="text-gray-100 leading-relaxed text-lg">{description}</p>
      </div>
    </div>
  </AnimateOnScroll>
);

const roles = [
  {
    icon: Music,
    title: "Rock Band Instructor",
    description:
      "Empowering young musicians at San Jose Jazz - Bridges Academy Middle School, combining my passion for music education with hands-on instrument instruction and ensemble leadership.",
    backgroundImage: "/images/guitar-background.JPG",
  },
  {
    icon: Code,
    title: "Front-End Engineer",
    description:
      "Creating intuitive and responsive web experiences using modern technologies with a focus on user-centric development.",
    backgroundImage: "/images/vscode.png",
  },
  {
    icon: Camera,
    title: "Photographer",
    description:
      "Capturing moments and stories through a creative lens, specializing in digital photography to create compelling visual narratives.",
    backgroundImage: "/images/wedding-background.jpg",
  },
] as const;

export function About() {
  return (
    <section
      id="about"
      className="p-6 md:p-12 bg-black bg-opacity-50 backdrop-blur-sm">
      <AnimateOnScroll
        animation={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white text-center mb-12">
            About Me
          </h2>
          <p className="text-gray-300 text-center max-w-4xl mx-auto mb-16 text-xl">
            I&apos;m a multidisciplinary creative professional whose work spans
            across music education, software development, and visual arts. Each
            role allows me to express creativity and innovation in unique ways.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roles.map((role, index) => (
              <RoleCard
                key={index}
                {...role}
                delay={index * 0.2} // Add 0.2s delay for each subsequent card
              />
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}

export default About;
