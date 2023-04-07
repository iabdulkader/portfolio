import React from "react";

type Props = {
  percentage: number;
  order: number;
};

function Skill({ percentage, order }: Props) {
  function getNonNegativeNumber(num: number): number {
    if (num < 0) {
      return 0;
    }
    return num;
  }
  const styleMobile = {
    transform: `translateX(${getNonNegativeNumber(
      100 + 30 * order - 2.5 * percentage
    )}%)`,
  };

  const styleDesktop = {
    box: {
      transform: `translateX(${percentage}%)`,
    },
    test: {
      marginLeft: `${percentage}%`,
    },
  };
  return (
    <div
      className="h-36 rounded-lg shadow-sm bg-[#231F1A] w-full bg-accent mb-6 transition-transform ease-out duration-500"
      style={styleMobile}
    ></div>
    // <div className="h-32 bg-[#231F1A] mb-6">
    //   <div className="  "></div>
    //   <div className="w-full  h-full bg-green-300">
    //     <div
    //       style={styleDesktop.test}
    //       className="bg-[#FEF48C] h-full w-80 rounded-lg"
    //     ></div>
    //   </div>
    // </div>
  );
}

export default Skill;
