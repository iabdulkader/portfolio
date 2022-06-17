import styles from "./Skills.module.css";
import { BsPatchCheckFill } from "react-icons/bs";

export default function FrontendSkills() {
  return(
    <div className={styles.skill__box}>
      <h3>Frontend</h3>
     
      <div className={styles.technology__list}>
        <article>
          <div>
            <BsPatchCheckFill className={styles.skill__box__icon} />
            <h5>Javascript</h5>
          </div>
          
          <div>
            <small className="text-light">Experienced</small>
          </div>
        </article>
        
        <article>
          <div>
            <BsPatchCheckFill className={styles.skill__box__icon} />
            <h5>HTML5</h5>
          </div>
          
          <div>
            <small className="text-light">Experienced</small>
          </div>
        </article>
        
        <article>
          <div>
            <BsPatchCheckFill className={styles.skill__box__icon} />
            <h5>React</h5>
          </div>
          
          <div>
            <small className="text-light">Experienced</small>
          </div>
        </article>
        
        <article>
          <div>
            <BsPatchCheckFill className={styles.skill__box__icon} />
            <h5>NextJS</h5>
          </div>
          
          <div>
            <small className="text-light">Experienced</small>
          </div>
        </article>
        
        <article>
          <div>
            <BsPatchCheckFill className={styles.skill__box__icon} />
            <h5>Sevelte</h5>
          </div>
          
          <div>
            <small className="text-light">Intermediate</small>
          </div>
        </article>
        
        <article>
          <div>
            <BsPatchCheckFill className={styles.skill__box__icon} />
            <h5>Tailwind</h5>
          </div>
          
          <div>
            <small className="text-light">Experienced</small>
          </div>
        </article>
        
        <article>
          <div>
            <BsPatchCheckFill className={styles.skill__box__icon} />
            <h5>Redux</h5>
          </div>
          
          <div>
            <small className="text-light">Intermediate</small>
          </div>
        </article>
      </div>
    </div>
    )
}