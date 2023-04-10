import React from "react";
import styles from "./style.module.css";

type Props = {
  children: string | React.ReactNode;
  href: string;
  padY?: number;
};

function Button({ children, href }: Props) {
  return (
    <a
      className={`${styles.button} border border-[#FEF48C] py-3 px-8 rounded-[2.5rem] text-[#FEF48C] relative overflow-hidden inline-block hover:scale-95 transition-all duration-300 hover:text-slate-900`}
      href={href}
    >
      {children}
      <div className={`${styles.cover} border border-[#FEF48C]`}></div>
    </a>
  );
}

export default Button;
