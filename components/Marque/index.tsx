import React from "react";
import styles from "./style.module.css";

type Props = {
  text: string;
};

const Marquee = ({ text }: Props) => {
  const repeatedText = Array.from({ length: 8 }, () => text).join(" ");

  return (
    <div className={`${styles.wrapper} mx-8`}>
      <div className={`${styles.marquee} font-black text-[5rem]`}>
        <p>{repeatedText}</p>
        <p>{repeatedText}</p>
      </div>
    </div>
  );
};

export default Marquee;
