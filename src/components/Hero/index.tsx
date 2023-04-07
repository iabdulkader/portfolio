"use client";

import React, { useRef } from "react";
import HeroText from "./HeroText";
import { useParallax } from "react-scroll-parallax";
import HeroBoxes from "./HeroBoxes";
import useElementPercentage from "@/hooks/useElementPercentage";

type Props = {};

function Hero({}: Props) {
  const target = useRef<HTMLDivElement>(null);
  const { percentage } = useElementPercentage({ target });

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
