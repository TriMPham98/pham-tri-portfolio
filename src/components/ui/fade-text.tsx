import React from "react";
import { cn } from "@/lib/utils";

type FadeTextProps = {
  className?: string;
  direction?: "up" | "down";
  // Seconds before the fade starts.
  delay?: number;
  children: React.ReactNode;
};

// A CSS entrance animation: it runs from the server-rendered HTML, so the
// content shows on first paint without waiting for hydration.
export function FadeText({
  direction = "up",
  className,
  delay = 0,
  children,
}: FadeTextProps) {
  return (
    <div
      className={cn(
        direction === "up" ? "animate-fade-up" : "animate-fade-down",
        className
      )}
      style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
}
