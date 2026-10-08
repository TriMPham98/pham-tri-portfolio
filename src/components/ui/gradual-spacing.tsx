import { cn } from "@/lib/utils";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  className?: string;
}

// Letters slide in with a CSS animation rather than Framer Motion, so the
// heading starts animating on first paint instead of sitting invisible in the
// server HTML until React hydrates.
export default function GradualSpacing({
  text,
  duration = 0.5,
  delayMultiple = 0.04,
  className,
}: GradualSpacingProps) {
  // One heading for assistive tech and crawlers; the per-letter spans are
  // only there to animate.
  return (
    <h1
      aria-label={text}
      className={cn("flex justify-center space-x-0.5 drop-shadow-sm", className)}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="inline-block animate-letter-in"
          style={{
            animationDuration: `${duration}s`,
            animationDelay: `${i * delayMultiple}s`,
          }}>
          {char === " " ? " " : char}
        </span>
      ))}
    </h1>
  );
}
