"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";

import { cn } from "@/lib/utils";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

export default function GradualSpacing({
  text,
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
}: GradualSpacingProps) {
  // One heading for assistive tech and crawlers; the per-letter spans are
  // only there to animate.
  return (
    <h1
      aria-label={text}
      className={cn("flex justify-center space-x-0.5 drop-shadow-sm", className)}>
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            aria-hidden="true"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={framerProps}
            transition={{ duration, delay: i * delayMultiple }}>
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.span>
        ))}
      </AnimatePresence>
    </h1>
  );
}
