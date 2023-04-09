import React from "react";

type Props = {
  percentage: number;
  order: number;
};

function Skill({ percentage = 50, order }: Props) {
  function getNonNegativeNumber(num: number): number {
    if (num < 0) {
      return 0;
    }
    return num;
  }
  const styleMobile = {
    case_1: {
      transform: `translateX(${getNonNegativeNumber(
        100 + 30 * order - 2.5 * percentage
      )}%)`,
    },
    case_2: {
      transform: `translateX(${getNonNegativeNumber(
        100 - (percentage * 5) / order
      )}%)`,
    },
  };

  const styleDesktop = {
    box: {
      minWidth: `50vw`,
      width: `${(percentage * 5) / order}%`,
    },
  };
  return (
    <>
      <div
        className="h-44 lg:hidden rounded-lg shadow-sm bg-[#231F1A] w-full bg-accent mb-6 transition-transform ease-out duration-500"
        style={styleMobile.case_1}
      ></div>
      <div className="h-56 mb-3 hidden lg:flex justify-center">
        <div
          style={styleDesktop.box}
          className="w-1/2 h-full bg-[#231F1A] flex  justify-end rounded-[2.5rem] "
        >
          <div className="bg-[#FEF48C] w-[50vw] flex justify-center h-full rounded-[2.5rem]">
            <div className=" h-full w-full"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
