import Link from "next/link";
import Image from "next/image";
import React from "react";
import { BsArrowUpRight, BsTerminalPlus } from "react-icons/bs";
import Box from "../Box";
import { AiOutlineDown } from "react-icons/ai";
import { BiNetworkChart, BiSend } from "react-icons/bi";
import Logo from "../../assets/logo.svg";
import Work from "./Work";

type Props = {};

function WorkBoxes({}: Props) {
  return (
    <>
      <div className="mt-6 w-full px-2 lg:px-0 grid gap-3 grid-rows-1 lg:grid-cols-2">
        <Link
          target="_blank"
          className="lg:col-span-2"
          href="https://joshare.xyz"
        >
          <Work
            className="bg-[#ffffff] text-slate-900"
            middle="JoShare"
            topLeft="01."
            topRight="Featured"
            height="24rem"
          />
        </Link>
        <Link target="_blank" href="https://lilink.vercel.app">
          <Work
            className="bg-[#CBE5FF] text-slate-900"
            middle="Link Shortner"
            topLeft="02."
            topRight="Showcase"
            height="24rem"
          />
        </Link>
        <Link target="_blank" href="https://1337x-api.vercel.app/docs">
          <Work
            className="bg-[#021F23] "
            middle="1337X API"
            topLeft="03."
            topRight="Showcase"
            height="24rem"
          />
        </Link>
        <Link target="_blank" href="https://www.npmjs.com/package/modal-rt">
          <Work
            className="bg-[#D0FF94] text-slate-900"
            middle="modal-rt"
            topLeft="04."
            topRight="Showcase"
            height="24rem"
          />
        </Link>
        <Link target="_blank" href="https://jobin-9yiv.onrender.com">
          <Work
            className="bg-[#290038] "
            middle="jobin"
            topLeft="05."
            topRight="Showcase"
            height="24rem"
          />
        </Link>
      </div>
    </>
  );
}

export default WorkBoxes;
