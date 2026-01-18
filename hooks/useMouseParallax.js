import { useState, useEffect, useCallback } from 'react';

export function useMouseParallax(intensity = 0.02) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const x = (e.clientX - centerX) * intensity;
      const y = (e.clientY - centerY) * intensity;
      setPosition({ x, y });
    },
    [intensity]
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const getParallaxStyle = useCallback(
    (depth = 1) => ({
      transform: `translate(${position.x * depth}px, ${position.y * depth}px)`,
      transition: 'transform 0.1s ease-out',
    }),
    [position]
  );

  return { position, getParallaxStyle };
}
