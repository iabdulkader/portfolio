"use client";

import React, { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
};

function About({ text }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loop = () => {
      if (ref.current) {
        const container = ref.current;
        const content = container.querySelector(
          ".text-loop-content"
        ) as HTMLElement;

        if (content) {
          const containerWidth = container.offsetWidth;
          const contentWidth = content.offsetWidth;
          const speed = 100; // Change this to adjust the animation speed

          let currentPosition = 0;
          let lastFrameTime = performance.now();

          const animate = () => {
            const currentTime = performance.now();
            const timeDelta = currentTime - lastFrameTime;

            lastFrameTime = currentTime;
            currentPosition -= speed * (timeDelta / 1000);

            if (currentPosition < -contentWidth) {
              currentPosition = containerWidth;
            }

            content.style.transform = `translateX(${currentPosition}px)`;

            requestAnimationFrame(animate);
          };

          animate();
        }
      }
    };

    loop();

    const loopId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(loopId);
    };
  }, []);

  return (
    <div className="text-loop-container relative" ref={ref}>
      <div className="text-loop-content absolute whitespace-nowrap top-0 left-0">
        {text}
      </div>
    </div>
  );
}

export default About;
