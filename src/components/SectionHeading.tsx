import type { ReactNode } from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

// One heading style for every home-page section.
export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: ReactNode;
}) {
  return (
    <AnimateOnScroll
      className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
      animation={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}>
      <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
          {subtitle}
        </p>
      )}
    </AnimateOnScroll>
  );
}

// Shared spacing for home-page sections; scroll-margin keeps /#id targets
// clear of the fixed header.
export const sectionClassName =
  "scroll-mt-16 px-4 py-20 md:scroll-mt-20 md:px-6 md:py-28";
