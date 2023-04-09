import React from "react";
import { IconType } from "react-icons";

type Props = {
  percentage: number;
  order: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
  icontext?: string;
};

function Skill({
  percentage = 50,
  order,
  title,
  description,
  icon,
  icontext,
}: Props) {
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
        className="h-44 flex items-center lg:hidden rounded-[2.5rem] shadow-sm bg-[#231F1A] w-full bg-accent mb-6 transition-transform ease-out duration-500"
        style={styleMobile.case_1}
      >
        <Skill.Body title={title} description={description} />
      </div>

      {/* Desktop */}
      <div className="h-56 mb-3 hidden lg:flex justify-center">
        <div
          style={styleDesktop.box}
          className="w-1/2 h-full bg-[#231F1A] flex  justify-end rounded-[2.5rem] relative"
        >
          <div className="absolute top-0 left-0 z-[1] max-w-[50vw] flex items-center h-full pr-10">
            <Skill.Body title={title} description={description} />
          </div>
          <div className="bg-[#FEF48C] w-[50vw] flex justify-center h-full rounded-[2.5rem] z-[2]">
            <div className="text-slate-700 flex items-center justify-center text-6xl h-full w-full">
              <div className="flex flex-col items-center">
                {icon}
                <p className="text-sm mt-2">{icontext}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Skill.Body = function SkillBody({
  title,
  description,
}: Pick<Props, "title" | "description">) {
  return (
    <div className="px-8">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Skill;
