import React from "react";
import Marquee from "../Marque";

interface Props {
  className?: string;
  animatedText?: string;
  showWithOutHover?: boolean;
}

const Box = ({ className, animatedText, showWithOutHover = false }: Props) => {
  return (
    <div
      className={`flex overflow-hidden items-center h-full rounded-[2.5rem] hover:scale-95 transition-all duration-300 group ${className}`}
    >
      <div
        className={`overflow-hidden ${
          showWithOutHover ? "block" : "hidden group-hover:block"
        }`}
      >
        {animatedText && <Marquee text={animatedText} />}
      </div>
    </div>
  );
};

export default Box;
