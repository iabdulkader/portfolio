"use client";

import React, { useEffect, useRef } from "react";
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
  const [percentage, setPercentage] = React.useState(55);
  // const train = useParallax({
  //   speed: 0.5,
  //   scale: [1, 0.1],
  //   targetElement: target.current as HTMLDivElement,
  // });

  // const cloud = useParallax({
  //   speed: 60,
  //   targetElement: target.current as HTMLDivElement,

  // });

  const divRef = useRef(null);

  const handleScroll = () => {
    const scrollTop = target.current!.scrollTop;
    console.log("Scroll Top:", target.current);
  };

  useEffect(() => {
    const handleScroll = () => {
      const divElement = target.current; // Get the div element from the ref
      if (divElement) {
        const rect = divElement.getBoundingClientRect(); // Get the bounding rect of the div element
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight; // Get the height of the window
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
    <div
      onScroll={handleScroll}
      className="relative min-h-screen h-full w-full"
    >
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
