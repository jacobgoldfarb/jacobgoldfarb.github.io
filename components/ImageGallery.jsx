import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useMousePosition } from '../hooks/useMousePosition';

const DISPLAY_DURATION = 6000;
const PAN_AMOUNT = 3;

export default function ImageGallery({ images, className = '' }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const mouse = useMousePosition();

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, DISPLAY_DURATION);

    return () => clearInterval(interval);
  }, [images.length]);

  if (images.length === 0) return null;

  const panX = (mouse.x - 0.5) * PAN_AMOUNT * 2;
  const panY = (mouse.y - 0.5) * PAN_AMOUNT * 2;

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      {images.map((src, index) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: index === activeIndex ? 1 : 0 }}
        >
          <div
            className="absolute inset-0 transition-transform duration-200 ease-out"
            style={{
              transform: `scale(1.08) translate(${panX}%, ${panY}%)`,
            }}
          >
            <Image
              src={src}
              alt="Photography by Jacob Goldfarb"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={index < 2}
            />
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'bg-white scale-100' : 'bg-white/40 scale-75'
            }`}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
