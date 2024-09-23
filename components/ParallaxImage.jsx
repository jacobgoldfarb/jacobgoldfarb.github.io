import React, { useEffect, useRef } from "react";

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

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`} ref={imageRef}>
      <img src={src} alt={alt} className="w-full max-h-[500px] object-cover" />
    </div>
  );
};

export default ParallaxImage;
