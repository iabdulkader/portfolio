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

type Props = {};

function Hero({}: Props) {
  const target = useRef<HTMLDivElement>(null);
  const train = useParallax({
    speed: 2,
    targetElement: target.current as HTMLDivElement,
  });

  const cloud = useParallax({
    speed: 80,
    targetElement: target.current as HTMLDivElement,
  });

  return (
    <div ref={target} className="relative mb-6 h-full w-full">
      <div ref={train.ref as React.RefObject<HTMLDivElement>}>
        <HeroText />
      </div>

      {/* Boxes */}

      <div
        ref={cloud.ref as React.RefObject<HTMLDivElement>}
        className="h-full grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5"
      >
        <div className="h-[24rem] lg:h-[30rem] px-2 lg:pl-5 lg:px-0">
          <a href="#about">
            <Box
              className="bg-[#2800E7]"
              animatedText="As an experienced and passionate full stack developer, I bring a diverse range of technical expertise to the table. From building responsive user interfaces with React, Next.js, and Svelte to designing scalable backend systems with Express, Node, Python, Django, and Docker, I am comfortable with a range of different technologies. With excellent communication skills and a collaborative mindset, I thrive in team-oriented environments and always aim to add value to any project I am a part of."
              showWithOutHover
              duration={500}
              topRight={
                <div className="w-12 h-12">
                  <Image src={Logo} alt="logo" />
                </div>
              }
              bottomLeft={<div>About</div>}
              bottomRight={<AiOutlineDown />}
            />
          </a>
        </div>

        <div className="h-[24rem] lg:h-[30rem] grid grid-rows-2 px-2 lg:pr-5 lg:px-0 gap-9 lg:gap-5 ">
          <div className="h-full gap-3 lg:gap-5 grid grid-cols-2">
            <Link href="#skills">
              <Box
                duration={100}
                className="bg-[#FFFFFF] text-slate-900"
                animatedText="Joshare. jobin. modal-rt. link-shortner. joshare-file-service-microservice. 1337x API."
                bottomLeft={<div>Works</div>}
                bottomRight={<BsTerminalPlus />}
              />
            </Link>
            <a href="#skills">
              <Box
                duration={350}
                className="bg-[#344e41] "
                animatedText="React, Nextjs, Svelte, Redux, Context-API, Tailwind, Chakra, Material-UI, Express, Socket-IO, Node, Python, Django, Docker, MongoDB, PostgreSQL, MySQL, Redis, Heroku, Netlify, Vercel, DigitalOcean, Firebase, Git, Github, Trello, Slack, Discord, Zoom, Figma, Adobe Photoshop, Adobe Illustrator."
                bottomLeft={<div>Skills</div>}
                bottomRight={<BiNetworkChart />}
              />
            </a>
          </div>

          <Box
            duration={80}
            className="bg-[#FEF48C] text-slate-900"
            animatedText="Contact me for any work or suggestions that you would like to give."
            bottomLeft={<div>Contact</div>}
            bottomRight={<BiSend />}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
