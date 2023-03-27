import React from "react";
import About from "../HeroBox/About";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="">
      <div className="flex justify-center my-48">
        <h1 className="font-[Satoshi] text-5xl font-bold">abdul kader</h1>
      </div>

      {/* Boxes */}

      <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="h-[30rem] px-5">
          <div className="bg-[#58B19F] h-full rounded-[2.5rem] hover:scale-95 transition-all duration-300">
            <About text="sgadhg" />
          </div>
        </div>

        <div className="h-[30rem] grid grid-rows-2 px-5 gap-5">
          <div className="h-full gap-5 grid grid-cols-2">
            <div className="bg-[#FD7272] rounded-[2.5rem] hover:scale-95 transition-all duration-300"></div>
            <div className="bg-[#25CCF7] rounded-[2.5rem] hover:scale-95 transition-all duration-300"></div>
          </div>
          <div className="bg-[#FEA47F] rounded-[2.5rem] hover:scale-95 transition-all duration-300"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
