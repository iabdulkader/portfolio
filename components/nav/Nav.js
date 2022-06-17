import { useState } from "react";
import styles from "./Nav.module.css";
import { AiOutlineHome, AiOutlineUser, AiOutlineProject } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";

export default function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  
  return(
    <div className={styles.nav}>
      <a 
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? styles.active : ""}
      ><AiOutlineHome /></a>
      
      <a 
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? styles.active : ""}
      ><AiOutlineUser /></a>
      
      <a 
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? styles.active : ""}
      ><BiBook /></a>
      
      <a 
        href="#projects"
        onClick={() => setActiveNav("#projects")}
        className={activeNav === "#projects" ? styles.active : ""}
      ><AiOutlineProject /></a>
      
      <a 
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? styles.active : ""}
      ><BiMessageSquareDetail /></a>
    </div>)
}