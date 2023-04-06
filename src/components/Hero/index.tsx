"use client";

import React, { useRef } from "react";
import Box from "../Box";
import Image from "next/image";
import { AiOutlineDown } from "react-icons/ai";
import { BsTerminalPlus } from "react-icons/bs";
import { BiNetworkChart, BiSend } from "react-icons/bi";
import Logo from "../../assets/logo.svg";
import Link from "next/link";
import HeroText from "./HeroText";
import { useParallax } from "react-scroll-parallax";
import HeroBoxes from "./HeroBoxes";

type Props = {};

function Hero({}: Props) {
  const target = useRef<HTMLDivElement>(null);
  const train = useParallax({
    speed: 0.5,
    scale: [1, 0.1],
    targetElement: target.current as HTMLDivElement,
  });

  const cloud = useParallax({
    speed: 60,
    targetElement: target.current as HTMLDivElement,
  });

  return (
    <div ref={target} className="relative min-h-screen h-full w-full">
      <div className=" " ref={train.ref as React.RefObject<HTMLDivElement>}>
        <HeroText />
      </div>

      {/* Boxes */}

      <div
        ref={cloud.ref as React.RefObject<HTMLDivElement>}
        className="h-full grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5"
      >
        <HeroBoxes />
      </div>
    </div>
  );
}

export default Hero;
