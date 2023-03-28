"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";

type Props = {};

function Cursor({}: Props) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        duration: 0.05,
      },
    },
    // text: {
    //   height: 150,
    //   width: 150,
    //   x: mousePosition.x - 75,
    //   y: mousePosition.y - 75,
    //   backgroundColor: "yellow",
    //   mixBlendMode: "difference",
    // },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <motion.div
      className={styles.cursor}
      //   variants={}
      variants={variants}
      animate={cursorVariant}
    />
  );
}

export default Cursor;
