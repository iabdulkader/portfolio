import React from "react";
import Box from "../Box";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="mb-6">
      <div className="flex justify-center my-48">
        <h1 className="font-[Satoshi] text-5xl font-bold">abdul kader</h1>
      </div>

      {/* Boxes */}

      <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="h-[30rem] px-5 lg:pl-5 lg:px-0">
          <Box
            className="bg-[#58B19f]"
            animatedText="Hey broooooo"
            showWithOutHover
          />
        </div>

        <div className="h-[30rem] grid grid-rows-2 px-5 lg:pr-5 lg:px-0 gap-5">
          <div className="h-full gap-5 grid grid-cols-2">
            <Box className="bg-[#FD7272]" animatedText="Hey broooooo" />
            <Box className="bg-[#25CCF7]" animatedText="Hey broooooo" />
          </div>

          <Box className="bg-[#FEA47F]" animatedText="Hey broooooo" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
