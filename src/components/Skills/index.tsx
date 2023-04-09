import React from "react";
import Skill from "./Skill";
import useScrollPercentage from "@/hooks/useDivPercent";
import SkillSpiner from "./SkillSpiner";

type Props = {};

function Skills({}: Props) {
  const divref = React.useRef<HTMLDivElement>(null);
  const { percentage } = useScrollPercentage({
    ref: divref,
  });

  return (
    <div id="skills" className="text-[#C5C2FF] my-10 w-full">
      <div className="inset-0 w-full">
        <p className="text-lg mb-3">Technology and Skills</p>
        <div className="flex gap-3 justify-end items-center">
          <h1 className="text-[3rem] lg:text-[4rem] leading-none font-medium">
            Languages, Frameworks, and Tools I am comfortable with
          </h1>
          <SkillSpiner percentage={percentage} />
        </div>

        <div ref={divref} className="h-full mt-16 pb-20 overflow-x-hidden">
          <Skill percentage={percentage} order={1} />
          <Skill percentage={percentage} order={2} />
          <Skill percentage={percentage} order={3} />
          <Skill percentage={percentage} order={4} />
          <Skill percentage={percentage} order={5} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
