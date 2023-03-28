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

      <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5">
        <div className="h-[24rem] lg:h-[30rem] px-2 lg:pl-5 lg:px-0">
          <Box
            className="bg-[#58B19f]"
            animatedText="Hey broooooo"
            showWithOutHover
            topLeft={<div>Top Left</div>}
            topRight={<div>Top Right</div>}
            bottomLeft={<div>Bottom Left</div>}
            bottomRight={<div>Bottom Right</div>}
          />
        </div>

        <div className="h-[24rem] lg:h-[30rem] grid grid-rows-2 px-2 lg:pr-5 lg:px-0 gap-3 lg:gap-5">
          <div className="h-full gap-3 lg:gap-5 grid grid-cols-2">
            <Box
              className="bg-[#FD7272]"
              animatedText="Hey broooooo"
              bottomLeft={<div>About</div>}
              bottomRight={<div>--</div>}
            />
            <Box className="bg-[#25CCF7]" animatedText="Hey broooooo" />
          </div>

          <Box
            className="bg-[#FEA47F]"
            animatedText="Hey broooooo"
            bottomLeft={<div>Bottom Left</div>}
            bottomRight={<div>Bottom Right</div>}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
