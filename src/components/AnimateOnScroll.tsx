"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, AnimationControls } from "framer-motion";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation: {
    hidden: object;
    visible: object;
  };
}

export const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  animation,
}) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animation}>
      {children}
    </motion.div>
  );
};
