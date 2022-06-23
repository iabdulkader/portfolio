import styles from "./Footer.module.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io";

export default function Footer() {
  return(
    <footer className={styles.footer} id="footer">
      <a href="#" className={styles.footer__logo}>Abdul Kader</a>
      
      <ul className={styles.permlinks}>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      
      <div className={styles.footer__socials}>
        <a href="https://twitter.com/itsabdulkader" target="_blank" rel="noreferrer"><IoLogoTwitter /></a>
        <a href="https://github.com/iabdulkader" target="_blank" rel="noreferrer"><BsGithub /></a>
        <a href="https://www.linkedin.com/in/itsabdulkader" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      </div>
      
      <div className={styles.footer__copyright}>
        <small>&copy; All Rights Reserved.   Abdul Kader.</small>
      </div>
    </footer>)
}