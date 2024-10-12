"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

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
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
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
