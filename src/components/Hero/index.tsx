import React from "react";
import Box from "../Box";
import Image from "next/image";
import { AiOutlineDown } from "react-icons/ai";
import { BsTerminalPlus } from "react-icons/bs";
import { BiNetworkChart, BiSend } from "react-icons/bi";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="mb-6">
      <div className="flex justify-center my-48">
        <h1 className="font-[Satoshi] text-5xl font-bold">abdul kader</h1>
      </div>

      {/* Boxes */}

      <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5">
        <div className="h-[24rem] lg:h-[30rem] px-2 lg:pl-5 lg:px-0">
          <Box
            className="bg-[#58B19f]"
            animatedText="As an experienced and passionate full stack developer, I bring a diverse range of technical expertise to the table. From building responsive user interfaces with React, Next.js, and Svelte to designing scalable backend systems with Express, Node, Python, Django, and Docker, I am comfortable with a range of different technologies. With excellent communication skills and a collaborative mindset, I thrive in team-oriented environments and always aim to add value to any project I am a part of."
            showWithOutHover
            duration={350}
            topRight={
              <div className="w-12 h-12">
                <Image src={require("../../assets/logo.svg")} alt="logo" />
              </div>
            }
            bottomLeft={<div className="">About</div>}
            bottomRight={<AiOutlineDown />}
          />
        </div>

        <div className="h-[24rem] lg:h-[30rem] grid grid-rows-2 px-2 lg:pr-5 lg:px-0 gap-3 lg:gap-5">
          <div className="h-full gap-3 lg:gap-5 grid grid-cols-2">
            <Box
              duration={80}
              className="bg-[#FD7272]"
              animatedText="Joshare. jobin. modal-rt. link-shortner. joshare-file-service-microservice. 1337x API."
              bottomLeft={<div>Works</div>}
              bottomRight={<BsTerminalPlus />}
            />
            <Box
              duration={220}
              className="bg-[#25CCF7]"
              animatedText="React, Nextjs, Svelte, Redux, Context-API, Tailwind, Chakra, Material-UI, Express, Socket-IO, Node, Python, Django, Docker, MongoDB, PostgreSQL, MySQL, Redis, Heroku, Netlify, Vercel, DigitalOcean, Firebase, Git, Github, Trello, Slack, Discord, Zoom, Figma, Adobe Photoshop, Adobe Illustrator."
              bottomLeft={<div>Skills</div>}
              bottomRight={<BiNetworkChart />}
            />
          </div>

          <Box
            duration={60}
            className="bg-[#FEA47F]"
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
