import React, { useEffect, useRef } from 'react';

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
    <div className={`relative ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full max-h-[500px] object-contain "
      />
    </div>
  );
};

export default ParallaxImage;
