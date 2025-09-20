"use client";

import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { photos } from "../data/photos";

const ParticleLinks = dynamic(() => import("./ui/particle-links"), {
  ssr: false,
});

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

  useEffect(() => {
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

// Memoized Lazy Image Component
const LazyImage = React.memo(
  ({
    src,
    alt,
    width,
    height,
    className,
    sizes,
    isLandscape,
    priority = false,
  }: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
    sizes?: string;
    isLandscape?: boolean;
    priority?: boolean;
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
              {!imageLoaded && <div className="absolute inset-0 bg-gray-800" />}

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
  }
);
LazyImage.displayName = "LazyImage";

const Lightbox = React.memo(
  ({
    filteredPhotos,
    currentImageIndex,
    onClose,
    onPrevious,
    onNext,
  }: {
    filteredPhotos: typeof photos;
    currentImageIndex: number;
    onClose: () => void;
    onPrevious: () => void;
    onNext: () => void;
  }) => (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-12"
      onClick={onClose}>
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300 z-60">
        ×
      </button>

      {/* Previous button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrevious();
        }}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-60">
        ‹
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-60">
        ›
      </button>

      {/* Main image */}
      <div className="w-full h-full flex items-center justify-center px-20">
        {filteredPhotos[currentImageIndex] && (
          <Image
            src={filteredPhotos[currentImageIndex].src}
            alt=""
            width={1200}
            height={800}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
            priority
          />
        )}
      </div>
    </div>
  )
);
Lightbox.displayName = "Lightbox";

export const PhotoGallery = React.memo(() => {
  const [filter, setFilter] = useState<string>("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const categories = useMemo(
    () => [
      "All",
      ...Array.from(new Set(photos.map((photo) => photo.category))),
    ],
    []
  );

  const filteredPhotos = useMemo(
    () =>
      filter === "All"
        ? photos
        : photos.filter((photo) => photo.category === filter),
    [filter]
  );

  // Reset currentImageIndex when filter changes to prevent index misalignment
  useEffect(() => {
    setCurrentImageIndex(0);
    if (lightboxOpen) {
      setLightboxOpen(false);
    }
  }, [filter]);

  // Check if device is mobile with matchMedia
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    handleChange({ matches: mediaQuery.matches } as MediaQueryListEvent);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setCurrentImageIndex((prev) =>
          prev === 0 ? filteredPhotos.length - 1 : prev - 1
        );
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setCurrentImageIndex((prev) =>
          prev === filteredPhotos.length - 1 ? 0 : prev + 1
        );
      } else if (e.key === "Escape") {
        e.preventDefault();
        setLightboxOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, filteredPhotos.length]);

  const openLightbox = useCallback(
    (index: number) => {
      if (isMobile) return; // Disable lightbox on mobile

      // Validate index and ensure photo exists
      if (
        index >= 0 &&
        index < filteredPhotos.length &&
        filteredPhotos[index]
      ) {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
      }
    },
    [isMobile, filteredPhotos.length]
  );

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredPhotos.length - 1 : prev - 1
    );
  }, [filteredPhotos.length]);

  const goToNext = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === filteredPhotos.length - 1 ? 0 : prev + 1
    );
  }, [filteredPhotos.length]);

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
            transition={{ delay: Math.min(index * 0.05, 0.5) }} // Cap delay at 0.5s for faster staggering
            className="masonry-item"
            style={{ marginBottom: "1.0rem" }}>
            <div
              className={`relative overflow-hidden rounded-lg bg-gray-900 transition-opacity ${
                isMobile ? "" : "cursor-pointer hover:opacity-90"
              }`}
              onClick={() => openLightbox(index)}>
              <LazyImage
                src={photo.src}
                alt=""
                width={400}
                height={600}
                className="relative w-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                isLandscape={photo.category === "Landscape"}
                priority={index < 3} // Priority for first 3 images
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen &&
        filteredPhotos.length > 0 &&
        currentImageIndex < filteredPhotos.length && (
          <Lightbox
            filteredPhotos={filteredPhotos}
            currentImageIndex={currentImageIndex}
            onClose={closeLightbox}
            onPrevious={goToPrevious}
            onNext={goToNext}
          />
        )}
    </div>
  );
});
