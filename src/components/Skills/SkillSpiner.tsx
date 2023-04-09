import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

type Props = {
  percentage: number;
};

function SkillSpiner({ percentage }: Props) {
  const textStyle = {
    transform: `rotate(${percentage}deg)`,
  };
  return (
    <div className="hidden lg:block text-center h-[200px] w-[200px] rounded-full relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold ">
        <AiOutlineArrowDown />
      </div>
      <div
        style={textStyle}
        className="flex justify-center items-center relative rounded-full h-full w-full font-black text-2xl font-[Satoshi] text-white transition-transform ease-out duration-300"
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="300px"
          height="300px"
          viewBox="0 0 300 300"
          enable-background="new 0 0 300 300"
          xmlSpace="preserve"
        >
          <defs>
            <path
              id="circlePath"
              d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
            />
          </defs>
          <circle cx="170" cy="120" r="75" fill="none" />
          <g>
            <use xlinkHref="#circlePath" fill="none" />
            <text fill="#000">
              <textPath fill="#C5C2FF" xlinkHref="#circlePath">
                Technologies. Skills. Experience.
              </textPath>
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default SkillSpiner;
