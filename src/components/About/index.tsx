import React from "react";
import ComputersCanvas from "../canvas/Computer";

type Props = {};

function About({}: Props) {
  return (
    <div id="about" className="grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full w-full p-6">
        <ComputersCanvas />
      </div>
      <div className="text-sm">
        <p>
          Hello, I'm Abdul Kader, a Full Stack JavaScript and TypeScript
          Developer from Dhaka, Bangladesh. I have a passion for creating
          efficient, user-friendly, and responsive web applications using the
          latest technologies. I specialize in both frontend and backend
          development and have advanced-level skills in React, Next.js, Redux,
          Material UI, Tailwind CSS, Express.js, GraphQL, Socket, Docker,
          Firebase, Azure, AWS, Ubuntu, Nginx, and various databases like
          MongoDB, PostgreSQL, MySQL, Firestore, etc.
        </p>
        <br />
        <p>
          {" "}
          As a team player, I always strive to collaborate with my teammates to
          produce the best products. I believe that teamwork, along with
          dedication and passion, can create wonders in the tech industry.
        </p>
        <br />
        <p>
          {" "}
          Apart from my technical skills, I have a few hobbies, such as watching
          movies and traveling, that help me stay refreshed and energized. I
          find traveling to be a great way to learn about different cultures and
          broaden my horizons, while movies help me relax and unwind after a
          long day of work.
        </p>
        <br />
        <p>
          {" "}
          I am always looking for opportunities to learn and grow as a
          developer, and I am excited about the prospect of working with new
          clients and contributing my skills to create innovative solutions that
          make a difference.
        </p>
      </div>
    </div>
  );
}

export default About;
