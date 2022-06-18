import styles from "./Skills.module.css";
import { BsPatchCheckFill } from "react-icons/bs";

export default function FrontendSkills() {
  return(
    <div className={styles.skill__box}>
      <h3>Other</h3>
     
      <div className={styles.technology__list}>
        <article>
          <div>
            <BsPatchCheckFill className={styles.skill__box__icon} />
            <h5>Docker</h5>
          </div>
          
          <div>
            <small className="text-light">Experienced</small>
          </div>
        </article>
        
        <article>
          <div>
            <BsPatchCheckFill className={styles.skill__box__icon} />
            <h5>Linux</h5>
          </div>
          
          <div>
            <small className="text-light">Experienced</small>
          </div>
        </article>
        
        <article>
          <div>
            <BsPatchCheckFill className={styles.skill__box__icon} />
            <h5>Bash</h5>
          </div>
          
          <div>
            <small className="text-light">Experienced</small>
          </div>
        </article>
        
        <article>
          <div>
            <BsPatchCheckFill className={styles.skill__box__icon} />
            <h5>Figma</h5>
          </div>
          
          <div>
            <small className="text-light">Experienced</small>
          </div>
        </article>
        
        <article>
          <div>
            <BsPatchCheckFill className={styles.skill__box__icon} />
            <h5>Postman</h5>
          </div>
          
          <div>
            <small className="text-light">Experienced</small>
          </div>
        </article>
        
        <article>
          <div>
            <BsPatchCheckFill className={styles.skill__box__icon} />
            <h5>Ai, Xd, Ps</h5>
          </div>
          
          <div>
            <small className="text-light">Moderate</small>
          </div>
        </article>
        
        <article>
          <div>
            <BsPatchCheckFill className={styles.skill__box__icon} />
            <h5>Firebase</h5>
          </div>
          
          <div>
            <small className="text-light">Experienced</small>
          </div>
        </article>
        
        <article>
          <div>
            <BsPatchCheckFill className={styles.skill__box__icon} />
            <h5>Aws</h5>
          </div>
          
          <div>
            <small className="text-light">Intermediate</small>
          </div>
        </article>
      </div>
    </div>
    )
}