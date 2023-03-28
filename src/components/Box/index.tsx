import React from "react";
import Marquee from "../Marque";

interface Props {
  className?: string;
  animatedText?: string;
  showWithOutHover?: boolean;
  duration: number;
  topLeft?: React.ReactNode | string | null;
  topRight?: React.ReactNode | string | null;
  bottomLeft?: React.ReactNode | string | null;
  bottomRight?: React.ReactNode | string | null;
}

const Box = ({
  className,
  animatedText,
  showWithOutHover = false,
  bottomLeft,
  bottomRight,
  topLeft,
  topRight,
  duration = 10,
}: Props) => {
  return (
    <div
      className={`flex flex-col overflow-hidden items-center h-full rounded-[2.5rem] hover:scale-95 transition-all duration-300 group ${className}`}
    >
      <div
        className={`h-[3rem] text-lg font-medium w-full flex justify-between px-5 lg:px-8 items-start pt-6 ${
          showWithOutHover ? "block" : "visible group-hover:invisible"
        }`}
      >
        <div>{topLeft}</div>
        <div>{topRight}</div>
      </div>

      <div className="flex-grow inset-0 flex items-center w-full px-3">
        <div
          className={`overflow-hidden ${
            showWithOutHover ? "block" : "hidden group-hover:block"
          }`}
        >
          {animatedText && <Marquee duration={duration} text={animatedText} />}
        </div>
      </div>

      <div
        className={`h-[3rem] text-lg font-medium w-full flex justify-between px-5 lg:px-8 items-start pb-6 ${
          showWithOutHover ? "block" : "visible group-hover:invisible"
        }`}
      >
        <div>{bottomLeft}</div>
        <div className="h-12 w-12 flex justify-center font-black text-3xl">
          {bottomRight}
        </div>
      </div>
    </div>
  );
};

export default Box;
