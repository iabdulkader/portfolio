import React from "react";
import WorkBoxes from "./WorkBoxes";

type Props = {};

function Skills({}: Props) {
  return (
    <div id="skills" className="text-[#C5C2FF] my-10 w-full">
      <div className="inset-0 w-full">
        <p className="text-lg mb-3">Works</p>
        <h1 className="text-[3rem] lg:text-[4rem] leading-none font-medium">
          Projects I have worked on
        </h1>

        <WorkBoxes />
      </div>
    </div>
  );
}

export default Skills;
