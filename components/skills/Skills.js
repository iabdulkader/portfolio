import styles from "./Skills.module.css";
import { BsPatchCheckFill } from "react-icons/bs";
import FrontendSkills from "./FrontendSkills";
import BackendSkills from "./BackendSkills";
import OtherSkills from "./OtherSkills";

export default function Experience() {
  return(
    <section id="skills">
      <h5>Technologies I have worked with</h5>
      <h2>My Skills</h2>
      
      <div className={`container ${styles.skills__container}`}>
        <FrontendSkills />
        <BackendSkills />
        <OtherSkills />
      </div>
    </section>)
}