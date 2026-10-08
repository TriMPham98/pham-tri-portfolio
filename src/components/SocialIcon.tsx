import { Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      className={className}>
      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
    </svg>
  );
}

const icons = {
  Email: Mail,
  GitHub: Github,
  LinkedIn: Linkedin,
  X: XIcon,
} as const;

export function SocialIcon({
  label,
  className,
}: {
  label: keyof typeof icons;
  className?: string;
}) {
  const Icon = icons[label];
  // The X glyph fills its box edge to edge; trim it to match the stroked icons.
  return (
    <Icon
      aria-hidden="true"
      className={cn("h-5 w-5", label === "X" && "p-0.5", className)}
    />
  );
}
