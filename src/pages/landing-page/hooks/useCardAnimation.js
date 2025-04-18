import { useState, useRef, useCallback } from 'react';

export const useCardAnimation = (
  defaultLightPosition = { x: 40, y: 40 },
) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [lightPosition, setLightPosition] = useState(
    defaultLightPosition,
  );
  const elementRef = useRef(null);
  const animationRef = useRef(null);

  const animateToDefaultLight = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    const start = { ...lightPosition };
    const end = { ...defaultLightPosition };
    const duration = 300;
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min(
        (time - startTime) / duration,
        1,
      );
      const easeOut = 1 - (1 - progress) * (1 - progress);

      const newX = start.x + (end.x - start.x) * easeOut;
      const newY = start.y + (end.y - start.y) * easeOut;

      setLightPosition({ x: newX, y: newY });

      if (progress < 1) {
        animationRef.current =
          requestAnimationFrame(animate);
      } else {
        animationRef.current = null;
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const handleMouseMove = useCallback((e) => {
    const el = elementRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 20;
    const rotateX = -((y - centerY) / centerY) * 20;
    const lightX = (x / rect.width) * 100;
    const lightY = (y / rect.height) * 100;

    setRotation({ x: rotateX, y: rotateY });
    setLightPosition({ x: lightX, y: lightY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setRotation({ x: 0, y: 0 });
    animateToDefaultLight();
  }, [lightPosition]);

  const handleMouseEnter = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  }, []);

  const cardStyle = {
    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
    transition: 'transform 0.3s ease-out',
  };

  const lightEffectStyle = {
    background: `radial-gradient(ellipse at ${lightPosition.x}% ${lightPosition.y}%,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0) 100%)`,
  };

  return {
    elementRef,
    cardStyle,
    lightEffectStyle,
    handleMouseMove,
    handleMouseLeave,
    handleMouseEnter,
  };
};
