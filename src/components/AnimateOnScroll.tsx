"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useReducedMotion } from "framer-motion";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation: {
    hidden: object;
    visible: object;
  };
  className?: string;
}

// Reveals its children the first time they scroll into view, then stays put,
// so content never fades back out (or gets caught mid-fade) on the way back up.
export const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  animation,
  className,
}) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(currentRef);

    return () => observer.disconnect();
  }, [controls]);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={animation}>
      {children}
    </motion.div>
  );
};
