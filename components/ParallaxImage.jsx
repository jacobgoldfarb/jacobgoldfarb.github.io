import React, { useEffect, useRef } from 'react';

const ParallaxImage = ({ src, alt }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          const offset = rect.top / window.innerHeight;
          imageRef.current.style.transform = `translateY(-${offset * 50}%)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative h-[300px] overflow-hidden">
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover transform scale-150"
      />
    </div>
  );
};

export default ParallaxImage;
