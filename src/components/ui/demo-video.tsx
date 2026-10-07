"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface DemoVideoProps {
  src: string;
  poster: string;
  label: string;
  className?: string;
}

// Looping, muted demo clip used in place of a GIF. Nothing is downloaded until the
// card scrolls into view (preload="none"), playback pauses off-screen, and visitors
// who prefer reduced motion or have Save-Data on only ever see the poster.
export function DemoVideo({ src, poster, label, className }: DemoVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const saveData = (navigator as Navigator & {
      connection?: { saveData?: boolean };
    }).connection?.saveData;
    if (reducedMotion || saveData) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className={cn("absolute inset-0 h-full w-full object-cover", className)}
      poster={poster}
      aria-label={label}
      muted
      loop
      playsInline
      preload="none"
      disablePictureInPicture>
      <source src={src} type="video/mp4" />
    </video>
  );
}
