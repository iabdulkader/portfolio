import React from "react";

type Props = {
  percentage: number;
};

function HeroText({ percentage }: Props) {
  return (
    <div className="w-full flex justify-center h-96 items-center relative">
      <h1
        className={` font-[Satoshi] text-[3rem] lg:text-[5rem] font-bold`}
        style={{
          scale: `${percentage === 0 ? 0 : (percentage + 45) / 100}`,
          opacity: `${percentage === 0 ? 0 : (percentage + 45) / 100}`,
        }}
      >
        abdul kader
      </h1>
    </div>
  );
}

export default HeroText;
