import React from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Music, Code, Camera } from "lucide-react";
import CodeComparison from "./ui/code-comparison";

interface RoleCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  backgroundImage?: string;
  customBackground?: React.ReactNode;
}

const RoleCard: React.FC<RoleCardProps> = ({
  icon: Icon,
  title,
  description,
  backgroundImage,
  customBackground,
}) => (
  <AnimateOnScroll
    animation={{
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    }}>
    <div
      className={`bg-gray-900 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[32rem] relative overflow-hidden ${
        backgroundImage ? "bg-cover bg-center" : ""
      }`}
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.69), rgba(17, 24, 39, 0.69)), url(${backgroundImage})`,
            }
          : undefined
      }>
      {customBackground}
      <div className="flex flex-col items-center text-center h-full justify-between py-6 relative z-10">
        <div className="bg-gray-800/80 p-5 rounded-full mb-8 backdrop-blur-sm">
          <Icon className="w-12 h-12 text-white" />
        </div>
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-white">{title}</h3>
          <p className="text-gray-100 leading-relaxed text-lg">{description}</p>
        </div>
      </div>
    </div>
  </AnimateOnScroll>
);

const sampleCode = {
  before: `// A simple React component
function Welcome() {
  const styles = {
    greeting: {
      color: '#333',
    }
  };

  return (
    <div style={styles.greeting}>
      <h1>Hello</h1>
    </div>
  );
}

export default Welcome;`,

  after: `// An enhanced React component
function Welcome({ name = 'Guest', theme = 'light' }) {
  const styles = {
    greeting: {
      color: theme === 'light' ? '#333' : '#fff',
    }
  };

  return (
    <div style={styles.greeting}>
      <h1>Hello {name}!</h1>
    </div>
  );
}

export default Welcome;`,
};

const roles = [
  {
    icon: Music,
    title: "Rock Band Instructor",
    description:
      "Empowering young musicians at San Jose Jazz - Bridges Academy Middle School, combining my passion for music education with hands-on instrument instruction and ensemble leadership.",
    backgroundImage: "/images/guitar-background.jpg",
  },
  {
    icon: Code,
    title: "Front-End Engineer",
    description:
      "Creating intuitive and responsive web experiences using modern technologies. BS in Computer Science from California State University, East Bay, with a focus on user-centric development.",
    customBackground: (
      <div className="absolute inset-0 opacity-20">
        <div className="scale-110 transform">
          <CodeComparison
            beforeCode={sampleCode.before}
            afterCode={sampleCode.after}
            language="typescript"
            filename="Welcome.tsx"
            lightTheme="github-light"
            darkTheme="github-dark"
          />
        </div>
      </div>
    ),
  },
  {
    icon: Camera,
    title: "Photographer",
    description:
      "Capturing moments and stories through a creative lens, specializing in both digital and analog photography to create compelling visual narratives.",
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
              <RoleCard key={index} {...role} />
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}

export default About;
