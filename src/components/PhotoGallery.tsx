"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ParticleLinks from "./ui/particle-links";
import { photos } from "../data/photos";

// Custom hook for intersection observer
const useIntersectionObserver = (options: IntersectionObserverInit = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const callbackFunction = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      setIsIntersecting(entry.isIntersecting);
      if (entry.isIntersecting && !hasIntersected) {
        setHasIntersected(true);
      }
    },
    [hasIntersected]
  );

  React.useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(callbackFunction, {
      threshold: 0.1,
      rootMargin: "50px",
      ...options,
    });

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [callbackFunction, options]);

  return { elementRef, isIntersecting, hasIntersected };
};

// Lazy Image Component
const LazyImage: React.FC<{
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
  isLandscape?: boolean;
  priority?: boolean;
}> = ({
  src,
  alt,
  width,
  height,
  className,
  sizes,
  isLandscape,
  priority = false,
}) => {
  const { elementRef, hasIntersected } = useIntersectionObserver();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      ref={elementRef}
      className={`${className} ${
        isLandscape ? "landscape-photo" : "portrait-photo"
      }`}>
      {/* Invisible placeholder to maintain layout */}
      <div className="w-full h-full">
        {hasIntersected && (
          <>
            {/* Loading placeholder - visible until image loads */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
                <div className="text-gray-400 text-sm flex flex-col items-center gap-2">
                  <div className="w-8 h-8 border-2 border-gray-600 border-t-gray-400 rounded-full animate-spin"></div>
                  <span>Loading...</span>
                </div>
              </div>
            )}

            {/* Actual image */}
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              sizes={sizes}
              loading={priority ? undefined : "lazy"}
              priority={priority}
              onLoad={() => setImageLoaded(true)}
            />
          </>
        )}

        {/* Placeholder when not intersected */}
        {!hasIntersected && <div className="w-full h-full bg-gray-800" />}
      </div>
    </div>
  );
};

export function PhotoGallery() {
  const [filter, setFilter] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(photos.map((photo) => photo.category))),
  ];

  const filteredPhotos =
    filter === "All"
      ? photos
      : photos.filter((photo) => photo.category === filter);

  return (
    <div className="w-full relative">
      {/* Particle Links Background */}
      <ParticleLinks className="fixed inset-0 z-0 pointer-events-none" />

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8 relative z-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              filter === category
                ? "bg-white text-black"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}>
            {category}
          </button>
        ))}
      </div>

      {/* Photo Grid */}
      <div className="masonry-grid relative z-10">
        <style jsx>{`
          .masonry-grid {
            column-count: 1;
            column-gap: 1rem;
            padding: 0;
          }

          @media (min-width: 640px) {
            .masonry-grid {
              column-count: 2;
            }
          }

          @media (min-width: 768px) {
            .masonry-grid {
              column-count: 3;
            }
          }

          @media (min-width: 1024px) {
            .masonry-grid {
              column-count: 4;
            }
          }

          @media (min-width: 1280px) {
            .masonry-grid {
              column-count: 5;
            }
          }

          .masonry-item {
            break-inside: avoid;
            display: inline-block;
            width: 100%;
          }

          .portrait-photo {
            aspect-ratio: 2/3;
          }

          .landscape-photo {
            aspect-ratio: 3/2;
          }
        `}</style>
        {filteredPhotos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="masonry-item"
            style={{ marginBottom: "1.0rem" }}>
            <div className="relative overflow-hidden rounded-lg bg-gray-900">
              <LazyImage
                src={photo.src}
                alt=""
                width={400}
                height={600}
                className="relative w-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                isLandscape={photo.category === "Landscape"}
                priority={index === 0}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
