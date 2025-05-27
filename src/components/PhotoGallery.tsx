"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Photography portfolio data - organized by category
const photos = [
  // Wedding Photography
  {
    id: 1,
    src: "/images/wedding-background.jpg",
    alt: "Wedding Photography",
    title: "Wedding Ceremony",
    category: "Wedding",
    description: "Capturing the magic of special moments",
  },
  {
    id: 2,
    src: "/images/photography/DSC00620.jpg",
    alt: "Wedding Photography",
    title: "Wedding Celebration",
    category: "Wedding",
    description: "Beautiful moments from a wedding celebration",
  },
  {
    id: 3,
    src: "/images/photography/DSC00974.jpg",
    alt: "Wedding Photography",
    title: "Wedding Reception",
    category: "Wedding",
    description: "Joyful moments during the wedding reception",
  },
  // Portrait Photography
  {
    id: 4,
    src: "/images/TriGuitarHeadshot.jpg",
    alt: "Portrait Photography",
    title: "Portrait Session",
    category: "Portrait",
    description: "Capturing personality and character",
  },
  // Music Photography
  {
    id: 5,
    src: "/images/guitar-background.JPG",
    alt: "Music Photography",
    title: "Musical Passion",
    category: "Music",
    description: "The art of music through visual storytelling",
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
            className="break-inside-avoid cursor-pointer group"
            onClick={() => openLightbox(photo.id)}>
            <div className="relative overflow-hidden rounded-lg bg-gray-900">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={400}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-lg">{photo.title}</h3>
                  <p className="text-sm text-gray-300">{photo.category}</p>
                </div>
              </div>
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
                alt={selectedPhotoData.alt}
                width={1200}
                height={800}
                className="max-w-full max-h-[80vh] object-contain"
              />

              {/* Photo Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {selectedPhotoData.title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {selectedPhotoData.description}
                </p>
              </div>

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
