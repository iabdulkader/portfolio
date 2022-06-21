import styles from "./About.module.css";
import Image from "next/image";
import me from "../../assets/me2.jpg";
import { FaAward } from "react-icons/fa";
import { MdOutlineBiotech } from "react-icons/md";
import { VscFolderLibrary } from "react-icons/vsc";

export default function About() {
  return(
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className={`container ${styles.about__container}`}>
      
        <div className={styles.about__me}>
          <div className={styles.about__me__image}>
            <Image src={me} alt="me" layout="responsive" />
          </div>
        </div>
        
        <div className={styles.about__content}>
          <div className={styles.about__cards}>
          
            <article className={styles.about__card}>
              <FaAward className={styles.about__icon} />
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </article>
            
            <article className={styles.about__card}>
              <VscFolderLibrary className={styles.about__icon} />
              <h5>Projects</h5>
              <small>120+ Completed</small>
            </article>
            
            <article className={styles.about__card}>
              <MdOutlineBiotech className={styles.about__icon} />
              <h5>Technologies</h5>
              <small>30+ And Learning</small>
            </article>
            
          </div>
          
          <p>I&apos;m a fullstack developer, tech enthusiast, blog writter and have interest in travelling. I&apos;m currently living in Dhaka, Bangladesh.<br /><br />I have 5+ years experience in web developing and designing. I have done a lot of projects and also built some fun apps too. You can find some of my projects below and other Open Source projects on my Github.</p>
          
          <a href="#contact" className="btn btn-primary">Let&apos;s Talk</a>
        </div>
      </div>
    </section>
    )
}