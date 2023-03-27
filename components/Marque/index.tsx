import React from "react";
import styles from "./style.module.css";

type Props = {
  text: string;
};

const Marquee = ({ text }: Props) => {
  const repeatedText = Array.from({ length: 8 }, () => text).join(" ");

  return (
    <div className={`${styles.wrapper} mx-3`}>
      <div className={`${styles.marquee} font-bold text-[4rem]`}>
        <p className="font-[Satoshi]">{repeatedText}</p>
        <p className="font-[Satoshi]">{repeatedText}</p>
      </div>
    </div>
  );
};

export default Marquee;
