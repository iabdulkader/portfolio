import React from "react";

type Props = {
  percentage: number | null;
};

function HeroText({ percentage = null }: Props) {
  return (
    <div className="w-full flex justify-center h-96 items-center relative">
      <h1
        className={` text-[3rem] lg:text-[5rem] font-bold`}
        style={{
          scale: `${percentage ? percentage / 100 : 1}`,
          opacity: `${percentage ? percentage / 100 : 1}`,
        }}
      >
        abdul kader{percentage}
      </h1>
    </div>
  );
}

export default HeroText;
