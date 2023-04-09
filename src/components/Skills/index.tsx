import React from "react";
import Skill from "./Skill";
import useScrollPercentage from "@/hooks/useDivPercent";
import SkillSpiner from "./SkillSpiner";
import { MdLanguage } from "react-icons/md";
import { SiFrontendmentor } from "react-icons/si";
import { TbServerCog } from "react-icons/tb";
import { RxGear } from "react-icons/rx";
import { VscTools } from "react-icons/vsc";

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
          <Skill
            title="Languages"
            icon={
              <div>
                <MdLanguage />
              </div>
            }
            icontext="Languages I am comfortable with."
            description="Typescript, javascript, Python, C(intermidiate), HTML, CSS, SQL."
            percentage={percentage}
            order={1}
          />
          <Skill
            title="Frontend"
            icon={
              <div>
                <SiFrontendmentor />
              </div>
            }
            icontext="Latest frontend technologies."
            description="React, Nextjs, Svelte, Tailwind, Chakra, Material UI, Bootstrap, Styled Components, Redux, Figma, JEST, Cypress, Storybook, Framer Motion, React Query etc."
            percentage={percentage}
            order={2}
          />
          <Skill
            title="Backend"
            icon={
              <div>
                <TbServerCog />
              </div>
            }
            icontext="Industry standard backend technologies."
            description="Nodejs, Express, Fastify, Django, Trpc, GraphQL, Apollo, Typeorm, Sequelize, Prisma, Mongodb, Postgresql, Mysql, Redis, Firebase, etc."
            percentage={percentage}
            order={3}
          />
          <Skill
            title="Sever"
            icon={
              <div>
                <RxGear />
              </div>
            }
            icontext="Server technologies and deployment."
            description="Docker, Linux, Heroku, Netlify, Vercel, AWS, GCP, nginx, Apache, pm2, etc."
            percentage={percentage}
            order={4}
          />
          <Skill
            title="Tools"
            icon={
              <div>
                <VscTools />
              </div>
            }
            icontext="Tools I use for development."
            description="Git, Github, Gitlab, Bitbucket, Figma, VScode, zsh, Illustrator, Photoshop etc."
            percentage={percentage}
            order={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
