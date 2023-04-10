import React from "react";
import avatarImg from "../../assets/avatar.png";
import Image from "next/image";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { BsStackOverflow } from "react-icons/bs";
import { TbBrandTelegram } from "react-icons/tb";
import { HiReply } from "react-icons/hi";
import { HiOutlineDownload } from "react-icons/hi";
import VoxelDog from "../VoxelDog";
import Button from "../Button";
import Link from "next/link";

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
          <div className="w-full hover:scale-105 duration-300 transition-all">
            {/* <Image src={avatarImg} alt="avatar" /> */}
            <VoxelDog />
          </div>

          <div className="flex items-center gap-6">
            <Button href="/abdulkader.pdf">
              <div className="font-medium flex items-center gap-1 lg:gap-3 text-xs whitespace-nowrap lg:text-xl">
                <HiOutlineDownload /> Download Resume
              </div>
            </Button>

            <Button href="mailto:abdulkadernow@gmail.com">
              <div className="font-medium flex items-center gap-1 lg:gap-3 text-xs whitespace-nowrap lg:text-xl">
                <HiReply /> Hire Me
              </div>
            </Button>
          </div>

          <div className="flex items-center gap-6 my-8 text-3xl">
            <Link href="https://github.com/iabdulkader" target="_blank">
              <FiGithub />
            </Link>
            <Link href="https://twitter.com/itsabdulkader" target="_blank">
              <FiTwitter />
            </Link>
            <Link href="https://t.me/itsabdulkader" target="_blank">
              <TbBrandTelegram />
            </Link>
            <Link
              href="https://stackoverflow.com/users/17509745/itsabdulkader"
              target="_blank"
            >
              <BsStackOverflow />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
