import React from "react";
import Marquee from "../Marque";
import { BsArrowUpRight } from "react-icons/bs";

interface Props {
  className?: string;
  topLeft?: React.ReactNode | string | null;
  topRight?: React.ReactNode | string | null;

  middle?: React.ReactNode | string | null;
  height?: string;
}

const Work = ({
  className,
  middle,
  topLeft,
  topRight,
  height = "3rem",
}: Props) => {
  return (
    <div
      className={`flex flex-col overflow-hidden items-center h-[${height}] rounded-[2.5rem] hover:scale-95 transition-all duration-300 group ${className}`}
    >
      <div
        className={`h-[3rem] text-lg font-medium w-full flex justify-between px-5 lg:px-8 items-start pt-6`}
      >
        <div>{topLeft}</div>
        <div>{topRight}</div>
      </div>

      <div className="flex-grow flex items-center w-full px-3">
        <div
          className={`flex justify-center items-center w-full h-full group-hover:scale-110 transition-all duration-300 text-[3rem] font-bold`}
        >
          {middle}
        </div>
      </div>

      <div
        className={`h-[3rem] text-lg font-medium w-full flex justify-between px-5 lg:px-8 items-start pb-6`}
      >
        <div>View Project</div>
        <div className="h-12 w-12 flex justify-center font-black text-3xl">
          <BsArrowUpRight />
        </div>
      </div>
    </div>
  );
};

export default Work;
