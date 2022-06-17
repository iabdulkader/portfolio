import styles from "./Skills.module.css";
import { BsPatchCheckFill } from "react-icons/bs";

export default function FrontendSkills() {
  return(
    <div className={styles.skill__box}>
      <h3>Backend</h3>
     
      <div className={styles.technology__list}>
        <article>
          <div>
            <BsPatchCheckFill className={styles.skill__box__icon} />
            <h5>Node JS</h5>
          </div>
          
          <div>
            <small className="text-light">Experienced</small>
          </div>
        </article>
        
        <article>
          <div>
            <BsPatchCheckFill className={styles.skill__box__icon} />
            <h5>Python</h5>
          </div>
          
          <div>
            <small className="text-light">Experienced</small>
          </div>
        </article>
        
        <article>
          <div>
            <BsPatchCheckFill className={styles.skill__box__icon} />
            <h5>MySql</h5>
          </div>
          
          <div>
            <small className="text-light">Experienced</small>
          </div>
        </article>
        
        <article>
          <div>
            <BsPatchCheckFill className={styles.skill__box__icon} />
            <h5>Postgresql</h5>
          </div>
          
          <div>
            <small className="text-light">Experienced</small>
          </div>
        </article>
        
        <article>
          <div>
            <BsPatchCheckFill className={styles.skill__box__icon} />
            <h5>MongoDB</h5>
          </div>
          
          <div>
            <small className="text-light">Experienced</small>
          </div>
        </article>
        
        <article>
          <div>
            <BsPatchCheckFill className={styles.skill__box__icon} />
            <h5>GraphQL</h5>
          </div>
          
          <div>
            <small className="text-light">Moderate</small>
          </div>
        </article>
        
        <article>
          <div>
            <BsPatchCheckFill className={styles.skill__box__icon} />
            <h5>Typescript</h5>
          </div>
          
          <div>
            <small className="text-light">Moderate</small>
          </div>
        </article>
        
        <article>
          <div>
            <BsPatchCheckFill className={styles.skill__box__icon} />
            <h5>Prisma</h5>
          </div>
          
          <div>
            <small className="text-light">Experienced</small>
          </div>
        </article>
      </div>
    </div>
    )
}