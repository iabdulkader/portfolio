import React from "react";
import Button from "../Button";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { VscGithubAlt } from "react-icons/vsc";

type Props = {};

function Social({}: Props) {
  return (
    <div className="max-w-[30rem]">
      <div className="mb-6 flex flex-col lg:flex-row gap-3 justify-between">
        <Button href="mailto:abdulkadernow@gmail.com">
          <div className="flex items-center gap-1 whitespace-nowrap justify-center w-full h-full">
            abdulkadernow@gmail.com
          </div>
        </Button>
        <Button href="https://twitter.com/itsabdulkader">
          <div className="flex items-center gap-1 whitespace-nowrap justify-center w-full h-full">
            <CiTwitter />
            @itsabdulkader
          </div>
        </Button>
      </div>
      <div className="flex justify-between gap-2">
        <Button href="https://instagram.com/itsabdulkader">
          <div className="lg:w-16 flex justify-center items-center">
            <AiOutlineInstagram />
          </div>
        </Button>
        <Button href="https://linkedin.com/in/itsabdulkader">
          <div className="lg:w-16 flex justify-center items-center">
            <AiOutlineLinkedin />
          </div>
        </Button>
        <Button href="https://github.com/iabdulkader">
          <div className="lg:w-16 flex justify-center items-center">
            <VscGithubAlt />
          </div>
        </Button>
      </div>
    </div>
  );
}

export default Social;
