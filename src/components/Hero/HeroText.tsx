"use client";
import React, { useState, useEffect } from "react";

type Props = {
  percentage: number | null;
};

function HeroText({ percentage = null }: Props) {
  return (
    <div className="w-full flex justify-center h-96 items-center relative">
      <h1
        className={` text-[3rem] lg:text-[5rem] font-bold`}
        // style={{
        //   scale: `${percentage ? percentage / 100 : 1}`,
        //   opacity: `${percentage ? percentage / 100 : 1}`,
        // }}
      >
        <ScrambleText text="abdul kader" />
      </h1>
    </div>
  );
}

interface ScrambleTextProps {
  text: string;
}

const ScrambleText: React.FC<ScrambleTextProps> = ({ text }) => {
  const [scrambledText, setScrambledText] = useState("");
  const [revealText, setRevealText] = useState(false);

  useEffect(() => {
    let scrambleIntervalId: NodeJS.Timeout;
    let revealTimeoutId: NodeJS.Timeout;

    const scrambleText = (text: string) => {
      const characters = text.split("");
      let currentIndex = characters.length;

      while (currentIndex > 0) {
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [characters[currentIndex], characters[randomIndex]] = [
          characters[randomIndex],
          characters[currentIndex],
        ];
      }

      return characters.join("");
    };

    scrambleIntervalId = setInterval(() => {
      setScrambledText(scrambleText(text));
    }, 50);

    revealTimeoutId = setTimeout(() => {
      setRevealText(true);
      clearInterval(scrambleIntervalId);
    }, 2000);

    return () => {
      clearInterval(scrambleIntervalId);
      clearTimeout(revealTimeoutId);
    };
  }, [text]);

  return <span>{revealText ? text : scrambledText}</span>;
};

export default HeroText;
