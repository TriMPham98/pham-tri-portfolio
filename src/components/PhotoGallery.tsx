"use client";

import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import Image from "next/image";
import { photos, type Photo } from "../data/photos";

const GalleryImage = React.memo(
  ({ photo, priority }: { photo: Photo; priority: boolean }) => {
    const frameRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(priority);
    const [imageLoaded, setImageLoaded] = useState(false);

    const markLoaded = useCallback((img: HTMLImageElement | null) => {
      if (!img) return;
      if (img.complete && img.naturalWidth > 0) {
        setImageLoaded(true);
        return;
      }
      img.addEventListener("load", () => setImageLoaded(true), { once: true });
    }, []);

    useEffect(() => {
      if (visible) return;
      const frame = frameRef.current;
      if (!frame) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        },
        { rootMargin: "400px" }
      );
      observer.observe(frame);
      return () => observer.disconnect();
    }, [visible]);

    return (
      <div
        ref={frameRef}
        className="relative w-full bg-neutral-900"
        style={{ aspectRatio: `${photo.width} / ${photo.height}` }}>
        {visible && (
          <Image
            src={photo.src}
            alt=""
            fill
            ref={markLoaded}
            className={`object-cover transition-opacity duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, (max-width: 1023px) 33vw, (max-width: 1279px) 25vw, 20vw"
            priority={priority}
            loading={priority ? undefined : "eager"}
          />
        )}
      </div>
    );
  }
);
GalleryImage.displayName = "GalleryImage";

const LIGHTBOX_SIZES = "90vw";

function neighborIndexes(index: number, length: number) {
  if (length <= 1) return [];
  const previous = (index - 1 + length) % length;
  const next = (index + 1) % length;
  return previous === next ? [next] : [previous, next];
}

const LightboxPhoto = React.memo(
  ({
    photo,
    visible,
    onDecoded,
    onClick,
  }: {
    photo: Photo;
    visible: boolean;
    onDecoded?: () => void;
    onClick?: (event: React.MouseEvent) => void;
  }) => {
    const imgRef = useRef<HTMLImageElement | null>(null);
    const onDecodedRef = useRef(onDecoded);
    onDecodedRef.current = onDecoded;

    const notify = useCallback(() => {
      onDecodedRef.current?.();
    }, []);

    const ref = useCallback(
      (img: HTMLImageElement | null) => {
        imgRef.current = img;
        if (!img) return;
        if (img.complete && img.naturalWidth > 0) notify();
        else img.addEventListener("load", notify, { once: true });
      },
      [notify]
    );

    useEffect(() => {
      const img = imgRef.current;
      if (!onDecoded || !img || !img.complete || img.naturalWidth === 0) return;
      notify();
    }, [notify, onDecoded]);

    return (
      <Image
        ref={ref}
        src={photo.src}
        alt=""
        width={photo.width}
        height={photo.height}
        sizes={LIGHTBOX_SIZES}
        priority
        onClick={onClick}
        className={
          visible
            ? "max-h-full max-w-full object-contain"
            : "pointer-events-none fixed left-0 top-0 h-px w-px opacity-0"
        }
      />
    );
  }
);
LightboxPhoto.displayName = "LightboxPhoto";

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
  }) => {
    const [shownIndex, setShownIndex] = useState(currentImageIndex);
    const length = filteredPhotos.length;
    const mountedIndexes = useMemo(() => {
      const indexes = [
        shownIndex,
        currentImageIndex,
        ...neighborIndexes(currentImageIndex, length),
      ];
      return Array.from(new Set(indexes)).filter(
        (index) => index >= 0 && index < length && filteredPhotos[index]
      );
    }, [currentImageIndex, filteredPhotos, length, shownIndex]);

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-12"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Photo">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-60 flex h-11 w-11 items-center justify-center text-3xl text-white hover:text-gray-300 sm:right-6 sm:top-6">
          ×
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          aria-label="Previous photo"
          className="absolute left-1 top-1/2 z-60 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-4xl text-white hover:text-gray-300 sm:left-6">
          ‹
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next photo"
          className="absolute right-1 top-1/2 z-60 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-4xl text-white hover:text-gray-300 sm:right-6">
          ›
        </button>

        <div className="flex h-full w-full items-center justify-center px-12 sm:px-20">
          {mountedIndexes.map((index) => {
            const photo = filteredPhotos[index];
            const visible = index === shownIndex;
            return (
              <LightboxPhoto
                key={photo.src}
                photo={photo}
                visible={visible}
                onClick={
                  visible ? (event) => event.stopPropagation() : undefined
                }
                onDecoded={
                  index === currentImageIndex && index !== shownIndex
                    ? () => setShownIndex(currentImageIndex)
                    : undefined
                }
              />
            );
          })}
        </div>
      </div>
    );
  }
);
Lightbox.displayName = "Lightbox";

export const PhotoGallery = React.memo(() => {
  const [filter, setFilter] = useState<string>("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

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

  // Check if device is mobile with matchMedia (SSR-safe)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Initialize isMobile on mount (client-side only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    }
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

  useEffect(() => {
    if (!lightboxOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [lightboxOpen]);

  const openLightbox = useCallback(
    (index: number) => {
      if (
        index >= 0 &&
        index < filteredPhotos.length &&
        filteredPhotos[index]
      ) {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
      }
    },
    [filteredPhotos.length]
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
        `}</style>
        {filteredPhotos.map((photo, index) => (
          <div
            key={photo.id}
            className="masonry-item"
            style={{ marginBottom: "1rem" }}>
            <div
              className={`relative overflow-hidden rounded-lg bg-neutral-900 ${
                isMobile ? "" : "cursor-pointer hover:opacity-90"
              }`}
              onClick={() => openLightbox(index)}>
              <GalleryImage photo={photo} priority={index === 0} />
            </div>
          </div>
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
PhotoGallery.displayName = "PhotoGallery";
