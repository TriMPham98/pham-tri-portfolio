"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ParticleLinks from "./ui/particle-links";

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

// Photography portfolio data - organized by category
const photos = [
  // Wedding Photography
  {
    id: 1,
    src: "/images/wedding-background.jpg",
    category: "Wedding",
  },
  {
    id: 2,
    src: "/images/photography/DSC00620.jpg",
    category: "Wedding",
  },
  {
    id: 3,
    src: "/images/photography/DSC00974.jpg",
    category: "Wedding",
  },
  {
    id: 4,
    src: "/images/photography/DSC09903.jpg",
    category: "Wedding",
  },
  {
    id: 5,
    src: "/images/photography/DSC00373.jpg",
    category: "Wedding",
  },
  {
    id: 6,
    src: "/images/photography/DSC00453.jpg",
    category: "Wedding",
  },
  {
    id: 7,
    src: "/images/photography/DSC00658.jpg",
    category: "Wedding",
  },
  {
    id: 8,
    src: "/images/photography/DSC00965.jpg",
    category: "Wedding",
  },
  {
    id: 9,
    src: "/images/photography/DSC00757.jpg",
    category: "Wedding",
  },
  {
    id: 10,
    src: "/images/photography/DSC00723.jpg",
    category: "Wedding",
  },
  {
    id: 35,
    src: "/images/photography/DSC01054.jpg",
    category: "Wedding",
  },
  {
    id: 36,
    src: "/images/photography/DSC01078.jpg",
    category: "Wedding",
  },
  // Portrait Photography
  {
    id: 11,
    src: "/images/photography/DSC08013.jpg",
    category: "Portrait",
  },
  {
    id: 12,
    src: "/images/photography/DSC08405-Edit.jpg",
    category: "Portrait",
  },
  {
    id: 13,
    src: "/images/photography/DSC08525-Edit.jpg",
    category: "Portrait",
  },
  {
    id: 14,
    src: "/images/photography/DSC08531-Edit.jpg",
    category: "Portrait",
  },
  {
    id: 15,
    src: "/images/photography/DSC08498-Edit.jpg",
    category: "Portrait",
  },
  {
    id: 24,
    src: "/images/photography/DSC02577.jpg",
    category: "Portrait",
  },
  {
    id: 25,
    src: "/images/photography/DSC02668-Edit.jpg",
    category: "Portrait",
  },
  {
    id: 26,
    src: "/images/photography/DSC03791.jpg",
    category: "Portrait",
  },
  {
    id: 27,
    src: "/images/photography/DSC09641.jpg",
    category: "Portrait",
  },
  {
    id: 28,
    src: "/images/photography/DSC04695.jpg",
    category: "Portrait",
  },
  // Landscape Photography
  {
    id: 16,
    src: "/images/photography/DSC03544.jpg",
    category: "Landscape",
  },
  {
    id: 17,
    src: "/images/photography/DSC03813.jpg",
    category: "Landscape",
  },
  {
    id: 18,
    src: "/images/photography/DSC06639.jpg",
    category: "Landscape",
  },
  {
    id: 19,
    src: "/images/photography/DSC08474.jpg",
    category: "Landscape",
  },
  {
    id: 20,
    src: "/images/photography/DSC09020.jpg",
    category: "Landscape",
  },
  {
    id: 21,
    src: "/images/photography/IMG_20190706_132705.jpg",
    category: "Landscape",
  },
  {
    id: 22,
    src: "/images/photography/DSC02260.jpg",
    category: "Landscape",
  },
  {
    id: 29,
    src: "/images/photography/DSC04107.jpg",
    category: "Landscape",
  },
  {
    id: 30,
    src: "/images/photography/DSC02852.jpg",
    category: "Landscape",
  },
  // Aviation Photography
  {
    id: 37,
    src: "/images/photography/DSC06866.jpg",
    category: "Aviation",
  },
  {
    id: 38,
    src: "/images/photography/DSC06819.jpg",
    category: "Aviation",
  },
  {
    id: 39,
    src: "/images/photography/DSC06455.jpg",
    category: "Aviation",
  },
  {
    id: 40,
    src: "/images/photography/DSC03206.jpg",
    category: "Aviation",
  },
  {
    id: 41,
    src: "/images/photography/DSC02832.jpg",
    category: "Aviation",
  },
  {
    id: 42,
    src: "/images/photography/DSC02658.jpg",
    category: "Aviation",
  },
  {
    id: 43,
    src: "/images/photography/DSC02409.jpg",
    category: "Aviation",
  },
  {
    id: 44,
    src: "/images/photography/DSC02317.jpg",
    category: "Aviation",
  },
  {
    id: 45,
    src: "/images/photography/DSC04810.jpg",
    category: "Aviation",
  },
  {
    id: 46,
    src: "/images/photography/DSC05540.jpg",
    category: "Aviation",
  },
  // New Photos - General Category
  {
    id: 31,
    src: "/images/photography/IMG_0809.JPG",
    category: "General",
  },
  {
    id: 32,
    src: "/images/photography/DSC04583.jpg",
    category: "General",
  },
  {
    id: 33,
    src: "/images/photography/DSC02779.jpg",
    category: "General",
  },
  {
    id: 34,
    src: "/images/photography/DSC02809.jpg",
    category: "General",
  },
];

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
