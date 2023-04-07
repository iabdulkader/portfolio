import React from "react";
import Skill from "./Skill";
import useScrollPercentage from "@/hooks/useDivPercent";

type Props = {};

function Skills({}: Props) {
  const divref = React.useRef<HTMLDivElement>(null);
  // const { percentage } = useElementPercentage({ target: divref });
  const { percentage } = useScrollPercentage({
    ref: divref,
  });
  // React.useEffect(() => {
  //   console.log(percentage);
  // }, [percentage]);

  return (
    <div id="skills" className="text-[#C5C2FF] my-10 w-full">
      <div className="inset-0 w-full">
        <p className="text-lg mb-3">Technology and Skills</p>
        <h1 className="text-[3rem] lg:text-[4rem] leading-none font-medium">
          Languages, Frameworks, and Tools I am comfortable with {percentage}
        </h1>

        <div ref={divref} className="h-full my-16 overflow-x-hidden">
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
