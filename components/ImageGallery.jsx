import { useState, useEffect } from 'react';
import Image from 'next/image';

const TRANSITION_DURATION = 1000;
const DISPLAY_DURATION = 5000;

export default function ImageGallery({ images, className = '' }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentIndex(nextIndex);
        setNextIndex((nextIndex + 1) % images.length);
        setIsTransitioning(false);
      }, TRANSITION_DURATION);
    }, DISPLAY_DURATION);

    return () => clearInterval(interval);
  }, [images.length, nextIndex]);

  if (images.length === 0) return null;

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      {images.map((src, index) => {
        const isCurrent = index === currentIndex;
        const isNext = index === nextIndex;
        const isVisible = isCurrent || (isNext && isTransitioning);

        if (!isVisible) return null;

        return (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: isCurrent && !isTransitioning ? 1 : isNext && isTransitioning ? 1 : 0 }}
          >
            <div className="absolute inset-0 ken-burns">
              <Image
                src={src}
                alt="Photography by Jacob Goldfarb"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
              />
            </div>
          </div>
        );
      })}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white scale-100'
                : 'bg-white/40 scale-75'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
