"use client";

import React, { useRef, useEffect } from "react";

interface ParallaxProps {
  children: React.ReactNode;
  strength?: number;
}

const ParallaxComponent: React.FC<ParallaxProps> = ({
  children,
  strength = 200,
}) => {
  const parallaxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) {
        return;
      }
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const parallax = parallaxRef.current;

      parallax.style.transform = `translateY(${scrollTop / strength}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [strength]);

  return (
    <div ref={parallaxRef} style={{ position: "relative" }}>
      {children}
    </div>
  );
};

export default ParallaxComponent;
