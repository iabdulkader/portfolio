import React from "react";
import avatarImg from "../../assets/avatar.png";
import Image from "next/image";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { BsStackOverflow } from "react-icons/bs";
import { TbBrandTelegram } from "react-icons/tb";

type Props = {};

function Skills({}: Props) {
  return (
    <div id="skills" className="text-[#C5C2FF] my-10 w-full">
      <div className="inset-0 w-full">
        <p className="text-lg mb-3">Technology and Skills</p>
        <h1 className="text-[3rem] lg:text-[5rem] leading-none font-medium">
          Languages, Frameworks, and Tools I am comfortable with
        </h1>
      </div>
    </div>
  );
}

export default Skills;
