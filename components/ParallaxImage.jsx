import { useEffect, useRef } from 'react';
import Image from 'next/image';

const ParallaxImage = ({ src, alt, className }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        imageRef.current.style.transform = `translateY(${scrollTop * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`} ref={imageRef}>
      <Image
        src={src}
        alt={alt}
        className="object-cover"
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default ParallaxImage;
