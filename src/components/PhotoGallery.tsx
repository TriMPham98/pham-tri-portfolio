"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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
  onClick?: () => void;
}> = ({ src, alt, width, height, className, sizes, onClick }) => {
  const { elementRef, hasIntersected } = useIntersectionObserver();

  return (
    <div ref={elementRef} className={className} onClick={onClick}>
      {hasIntersected ? (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto object-cover transition-opacity duration-300"
          sizes={sizes}
          loading="lazy"
        />
      ) : (
        <div
          className="w-full bg-gray-800 animate-pulse flex items-center justify-center min-h-[200px]"
          style={{ aspectRatio: `${width}/${height}` }}>
          <div className="text-gray-400 text-sm flex flex-col items-center gap-2">
            <div className="w-8 h-8 border-2 border-gray-600 border-t-gray-400 rounded-full animate-spin"></div>
            <span>Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

// Photography portfolio data - organized by category
const photos = [
  // Wedding Photography
  {
    id: 1,
    src: "/images/wedding-background.jpg",
    title: "Wedding Ceremony",
    category: "Wedding",
    description: "Capturing the magic of special moments",
  },
  {
    id: 2,
    src: "/images/photography/DSC00620.jpg",
    title: "Wedding Celebration",
    category: "Wedding",
    description: "Beautiful moments from a wedding celebration",
  },
  {
    id: 3,
    src: "/images/photography/DSC00974.jpg",
    title: "Wedding Reception",
    category: "Wedding",
    description: "Joyful moments during the wedding reception",
  },
  {
    id: 4,
    src: "/images/photography/DSC09903.jpg",
    title: "Wedding Moments",
    category: "Wedding",
    description: "Capturing precious wedding memories",
  },
  {
    id: 5,
    src: "/images/photography/DSC00373.jpg",
    title: "Wedding Joy",
    category: "Wedding",
    description: "Moments of pure happiness and celebration",
  },
  {
    id: 6,
    src: "/images/photography/DSC00453.jpg",
    title: "Wedding Love",
    category: "Wedding",
    description: "Beautiful expressions of love and commitment",
  },
  {
    id: 7,
    src: "/images/photography/DSC00658.jpg",
    title: "Wedding Bliss",
    category: "Wedding",
    description: "Capturing the essence of wedding day bliss",
  },
  {
    id: 8,
    src: "/images/photography/DSC00965.jpg",
    title: "Wedding Romance",
    category: "Wedding",
    description: "Romantic wedding moments captured beautifully",
  },
  {
    id: 9,
    src: "/images/photography/DSC00757.jpg",
    title: "Wedding Elegance",
    category: "Wedding",
    description: "Elegant wedding photography",
  },
  {
    id: 10,
    src: "/images/photography/DSC00723.jpg",
    title: "Wedding Grace",
    category: "Wedding",
    description: "Graceful wedding day moments",
  },
  // Portrait Photography
  {
    id: 11,
    src: "/images/photography/DSC08013.jpg",
    title: "Wedding Portrait",
    category: "Portrait",
    description: "Beautiful wedding portrait moment",
  },
  {
    id: 12,
    src: "/images/photography/DSC08405-Edit.jpg",
    title: "Portrait Study",
    category: "Portrait",
    description: "Professional portrait photography",
  },
  {
    id: 13,
    src: "/images/photography/DSC08525-Edit.jpg",
    title: "Character Portrait",
    category: "Portrait",
    description: "Capturing unique personality",
  },
  {
    id: 14,
    src: "/images/photography/DSC08531-Edit.jpg",
    title: "Artistic Portrait",
    category: "Portrait",
    description: "Creative portrait composition",
  },
  {
    id: 15,
    src: "/images/photography/DSC08498-Edit.jpg",
    title: "Portrait Expression",
    category: "Portrait",
    description: "Expressive portrait photography",
  },
  // Landscape Photography
  {
    id: 16,
    src: "/images/photography/DSC03544.jpg",
    title: "Natural Beauty",
    category: "Landscape",
    description: "Capturing the beauty of natural landscapes",
  },
  {
    id: 17,
    src: "/images/photography/DSC03813.jpg",
    title: "Scenic Vista",
    category: "Landscape",
    description: "Breathtaking scenic landscape view",
  },
  {
    id: 18,
    src: "/images/photography/DSC06639.jpg",
    title: "Nature's Canvas",
    category: "Landscape",
    description: "Nature's artistry captured in frame",
  },
  {
    id: 19,
    src: "/images/photography/DSC08474.jpg",
    title: "Landscape Serenity",
    category: "Landscape",
    description: "Peaceful and serene landscape moment",
  },
  {
    id: 20,
    src: "/images/photography/DSC09020.jpg",
    title: "Horizon Dreams",
    category: "Landscape",
    description: "Dreamy horizon landscape photography",
  },
  {
    id: 21,
    src: "/images/photography/IMG_20190706_132705.jpg",
    title: "Mountain Vista",
    category: "Landscape",
    description: "Stunning mountain landscape captured in natural light",
  },
  {
    id: 22,
    src: "/images/photography/DSC02260.jpg",
    title: "Scenic Wilderness",
    category: "Landscape",
    description: "Breathtaking wilderness landscape photography",
  },
];

export function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(photos.map((photo) => photo.category))),
  ];

  const filteredPhotos =
    filter === "All"
      ? photos
      : photos.filter((photo) => photo.category === filter);

  const openLightbox = (photoId: number) => {
    setSelectedPhoto(photoId);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction: "prev" | "next") => {
    if (selectedPhoto === null) return;

    const currentIndex = filteredPhotos.findIndex(
      (photo) => photo.id === selectedPhoto
    );
    let newIndex;

    if (direction === "prev") {
      newIndex =
        currentIndex > 0 ? currentIndex - 1 : filteredPhotos.length - 1;
    } else {
      newIndex =
        currentIndex < filteredPhotos.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedPhoto(filteredPhotos[newIndex].id);
  };

  const selectedPhotoData = selectedPhoto
    ? filteredPhotos.find((photo) => photo.id === selectedPhoto)
    : null;

  return (
    <div className="w-full">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
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
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {filteredPhotos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="break-inside-avoid cursor-pointer">
            <div className="relative overflow-hidden rounded-lg bg-gray-900">
              <LazyImage
                src={photo.src}
                alt=""
                width={400}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                onClick={() => openLightbox(photo.id)}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && selectedPhotoData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}>
              <Image
                src={selectedPhotoData.src}
                alt=""
                width={1200}
                height={800}
                className="max-w-full max-h-[80vh] object-contain"
                priority
              />

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors">
                <X size={32} />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigatePhoto("prev")}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors">
                <ChevronLeft size={48} />
              </button>
              <button
                onClick={() => navigatePhoto("next")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors">
                <ChevronRight size={48} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
