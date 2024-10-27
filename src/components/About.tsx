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
  before: `// A simple React component with basic styling
function Welcome() {
  const styles = {
    container: {
      padding: '20px',
      margin: '10px',
      border: '1px solid #ddd',
      borderRadius: '4px'
    },
    greeting: {
      color: '#333',
      fontSize: '24px',
      fontFamily: 'Arial, sans-serif'
    },
    subtitle: {
      color: '#666',
      fontSize: '16px',
      marginTop: '10px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.greeting}>
        <h1>Hello</h1>
      </div>
      <p style={styles.subtitle}>Welcome to our site</p>
      <button 
        onClick={() => console.log('Button clicked!')}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default Welcome;`,

  after: `// An enhanced React component with advanced features
function Welcome({ 
  name = 'Guest', 
  theme = 'light',
  onButtonClick,
  notifications = []
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [activeTheme, setActiveTheme] = useState(theme);
  const [showNotifications, setShowNotifications] = useState(false);

  const styles = {
    container: {
      padding: '20px',
      margin: '10px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      backgroundColor: activeTheme === 'light' ? '#ffffff' : '#1a1a1a',
      transition: 'background-color 0.3s ease'
    },
    greeting: {
      color: activeTheme === 'light' ? '#333' : '#fff',
      fontSize: '24px',
      fontFamily: 'Arial, sans-serif',
      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      transition: 'transform 0.2s ease'
    },
    subtitle: {
      color: activeTheme === 'light' ? '#666' : '#ccc',
      fontSize: '16px',
      marginTop: '10px'
    },
    notification: {
      position: 'relative',
      padding: '10px',
      backgroundColor: '#f8f9fa',
      borderRadius: '4px',
      marginTop: '10px'
    }
  };

  useEffect(() => {
    // Update theme based on system preferences
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setActiveTheme(prefersDark ? 'dark' : 'light');
  }, []);

  const handleButtonClick = () => {
    setIsHovered(false);
    onButtonClick?.();
    setShowNotifications(!showNotifications);
  };

  return (
    <div 
      style={styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.greeting}>
        <h1>Hello {name}!</h1>
      </div>
      <p style={styles.subtitle}>Welcome to my portfolio</p>
      
      <button 
        onClick={handleButtonClick}
        style={{
          padding: '8px 16px',
          backgroundColor: isHovered ? '#0056b3' : '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'background-color 0.2s ease'
        }}
      >
        Toggle Notifications
      </button>

      {showNotifications && notifications.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          {notifications.map((notification, index) => (
            <div key={index} style={styles.notification}>
              {notification.message}
            </div>
          ))}
        </div>
      )}

      <button
        onClick={() => setActiveTheme(prev => prev === 'light' ? 'dark' : 'light')}
        style={{
          padding: '8px 16px',
          backgroundColor: 'transparent',
          color: activeTheme === 'light' ? '#333' : '#fff',
          border: '1px solid currentColor',
          borderRadius: '4px',
          cursor: 'pointer',
          marginLeft: '10px'
        }}
      >
        Toggle Theme
      </button>
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
