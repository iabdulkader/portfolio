import React from "react";
import styles from "./style.module.css";

type Props = {
  text: string;
  duration: number;
};

const Marquee = ({ text, duration }: Props) => {
  const repeatedText = Array.from({ length: 8 }, () => text).join(" ");

  return (
    <div className={`${styles.wrapper}`}>
      <div
        style={{ animationDuration: `${duration}s` }}
        className={`${styles.marquee} font-bold text-[4rem]`}
      >
        <p className="font-[Satoshi]">{repeatedText}</p>
        <p className="font-[Satoshi]">{repeatedText}</p>
      </div>
    </div>
  );
};

export default Marquee;
