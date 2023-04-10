import Link from "next/link";
import Image from "next/image";
import React from "react";
import { BsTerminalPlus } from "react-icons/bs";
import Box from "../Box";
import { AiOutlineDown } from "react-icons/ai";
import { BiNetworkChart, BiSend } from "react-icons/bi";
import Logo from "../../assets/logo.svg";

type Props = {};

function HeroBoxes({}: Props) {
  function handle(div: string) {
    let element = document.getElementById(div);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <>
      <div className="h-[24rem] lg:h-[30rem] px-2 lg:pl-5 lg:px-0">
        <Box
          onClick={() => handle("about")}
          className="bg-[#2800E7]"
          animatedText="As an experienced and passionate full stack developer, I bring a diverse range of technical expertise to the table. From building responsive user interfaces with React, Next.js, and Svelte to designing scalable backend systems with Express, Node, Python, Django, and Docker, I am comfortable with a range of different technologies. With excellent communication skills and a collaborative mindset, I thrive in team-oriented environments and always aim to add value to any project I am a part of."
          showWithOutHover
          duration={650}
          topRight={
            <div className="w-12 h-12">
              <Image src={Logo} alt="logo" />
            </div>
          }
          bottomLeft={<div>About</div>}
          bottomRight={<AiOutlineDown />}
        />
      </div>

      <div className="h-[24rem] lg:h-[30rem] grid grid-rows-2 px-2 lg:pr-5 lg:px-0 gap-3 lg:gap-5 ">
        <div className="h-full gap-3 lg:gap-5 grid grid-cols-2">
          <Box
            onClick={() => handle("works")}
            duration={150}
            className="bg-[#FFFFFF] text-slate-900"
            animatedText="Joshare. jobin. modal-rt. link-shortner. joshare-file-service-microservice. 1337x API."
            bottomLeft={<div>Works</div>}
            bottomRight={<BsTerminalPlus />}
          />

          <Box
            onClick={() => handle("skills")}
            duration={500}
            className="bg-[#344e41] "
            animatedText="React, Nextjs, Svelte, Redux, Context-API, Tailwind, Chakra, Material-UI, Express, Socket-IO, Node, Python, Django, Docker, MongoDB, PostgreSQL, MySQL, Redis, Heroku, Netlify, Vercel, DigitalOcean, Firebase, Git, Github, Trello, Slack, Discord, Zoom, Figma, Adobe Photoshop, Adobe Illustrator."
            bottomLeft={<div>Skills</div>}
            bottomRight={<BiNetworkChart />}
          />
        </div>

        <Box
          onClick={() => {
            handle("contact");
          }}
          duration={120}
          className="bg-[#FEF48C] text-slate-900"
          animatedText="Contact me for any work or suggestions that you would like to give."
          bottomLeft={<div>Contact</div>}
          bottomRight={<BiSend />}
        />
      </div>
    </>
  );
}

export default HeroBoxes;
