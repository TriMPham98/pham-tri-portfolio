import React from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { SectionHeading, sectionClassName } from "@/components/SectionHeading";
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
    className="h-full"
    animation={{
      hidden: { opacity: 0, y: 24 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
          delay: delay,
        },
      },
    }}>
    <div
      className={`group relative h-full min-h-[26rem] overflow-hidden rounded-xl border border-white/10 bg-gray-900 p-8 shadow-xl transition-all duration-300 can-hover:hover:-translate-y-1 can-hover:hover:border-white/25 can-hover:hover:shadow-2xl md:min-h-[32rem] ${
        backgroundImage ? "bg-cover bg-center" : ""
      }`}
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(3, 7, 18, 0.85) 35%, rgba(17, 24, 39, 0.45)), url(${backgroundImage})`,
            }
          : undefined
      }>
      <div className="flex flex-col items-center text-center h-full relative z-10">
        <div className="mb-6 rounded-full border border-white/10 bg-gray-800/80 p-5 backdrop-blur-sm">
          <Icon aria-hidden="true" className="h-10 w-10 text-white md:h-12 md:w-12" />
        </div>
        <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">{title}</h3>
        <p className="text-base leading-relaxed text-gray-100 md:text-lg">{description}</p>
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
    <section id="about" className={sectionClassName}>
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="About Me"
          subtitle="I'm a multidisciplinary creative whose work spans music education, software development, and visual arts. Each role lets me express creativity and innovation in its own way."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {roles.map((role, index) => (
            <RoleCard key={role.title} {...role} delay={index * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
