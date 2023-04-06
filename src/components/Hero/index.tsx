"use client";

import React, { useEffect, useRef } from "react";
import HeroText from "./HeroText";
import { useParallax } from "react-scroll-parallax";
import HeroBoxes from "./HeroBoxes";

type Props = {};

function Hero({}: Props) {
  const target = useRef<HTMLDivElement>(null);
  const [percentage, setPercentage] = React.useState(55);

  useEffect(() => {
    const handleScroll = () => {
      const divElement = target.current;
      if (divElement) {
        const rect = divElement.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const percentage = Math.max(
          0,
          Math.min(
            100,
            ((rect.bottom > 0 ? rect.bottom : 0) / windowHeight) * 100
          )
        );
        setPercentage(Math.floor(percentage));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [target]);

  return (
    <div className="relative min-h-screen h-full w-full">
      <div ref={target} className=" ">
        <HeroText percentage={percentage} />
      </div>

      {/* Boxes */}

      <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5">
        <HeroBoxes />
      </div>
    </div>
  );
}

export default Hero;
