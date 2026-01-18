import React from 'react';
import Image from 'next/image';

const ParallaxImage = ({ src, alt, className }) => {
  const vignetteStyle = {
    position: 'relative',
    display: 'inline-block',
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle, transparent 50%, black 100%)',
    opacity: 0.5
};

const imageContainerStyle = {
    display: 'inline-block',
    position: 'relative'
};

  return (
    <div className={`relative ${className}`} style={imageContainerStyle}>
      <Image
        src={src}
        alt={alt}
        className="w-full max-h-[500px] object-contain "
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default ParallaxImage;
