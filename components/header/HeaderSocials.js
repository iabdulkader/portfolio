import styles from "./Header.module.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

export default function HeaderSocials() {
  return(
    <div className={styles.header__socials}>
      <a href="https://www.linkedin.com/in/itsabdulkader" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/iabdulkader" target="_blank" rel="noreferrer"><BsGithub /></a>
      <a href="https://twitter.com/itsabdulkader" target="_blank" rel="noreferrer"><AiOutlineTwitter /></a>
    </div>
    )
}