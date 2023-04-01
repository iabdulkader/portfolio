import React from "react";
import avatarImg from "../../assets/avatar.png";
import Image from "next/image";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { BsStackOverflow } from "react-icons/bs";
import { TbBrandTelegram } from "react-icons/tb";
import { HiReply } from "react-icons/hi";
import { HiOutlineDownload } from "react-icons/hi";

type Props = {};

function About({}: Props) {
  return (
    <div
      id="about"
      className="text-[#C5C2FF] grid grid-cols-1 lg:grid-cols-2 my-10 gap-20"
    >
      <div className="inset-0 ">
        <p className="text-lg mb-3">About Me</p>
        <h1 className="text-[3rem] lg:text-[4rem] leading-none font-medium">
          Hello, <br /> I'm Abdul Kader, a Full Stack JavaScript and TypeScript
          Developer. I have a passion for creating efficient, user-friendly, and
          responsive web applications using the latest technologies.
        </h1>
      </div>
      <div className="flex justify-center my-auto">
        <div className="flex-col items-center flex">
          <div className="w-72 hover:scale-105 duration-300 transition-all">
            <Image src={avatarImg} alt="avatar" />
          </div>

          <div className="flex items-center gap-6">
            <button className="bg-[#FEF48C] font-bold flex items-center gap-1 lg:gap-3 text-xs whitespace-nowrap lg:text-xl px-8 py-5 rounded-[2.5rem] mt-5 text-slate-950 hover:scale-95  transition-all duration-300">
              <HiOutlineDownload /> Download Resume
            </button>

            <button className="bg-[#FEF48C] font-bold flex items-center gap-1 lg:gap-3 text-xs whitespace-nowrap lg:text-xl px-8 py-5 rounded-[2.5rem] mt-5 text-slate-950 hover:scale-95 transition-all duration-300">
              <HiReply /> Hire Me
            </button>
          </div>

          <div className="flex items-center gap-6 my-8 text-3xl">
            <FiGithub />
            <FiTwitter />
            <TbBrandTelegram />
            <BsStackOverflow />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
