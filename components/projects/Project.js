import styles from "./Projects.module.css";
import Image from "next/image";
import Logo from "./Logo";
import { Icon } from '@iconify/react';

export default function Project({project}) {
  return(
    <div className={styles.project__container}>
      <div className={styles.logo__box}>
        <Logo index={project.index} />
      </div>
      
      <div>
        <h3>{project.name}</h3>
        <p className="text-light">{project.description}</p>
        
      </div>
      
      <div className={styles.bottom}>
        <div className={styles.stack__icons}>
            {project.stack.map((tag) =>
                (<Icon key={tag} className="tagImg" icon={tag} width="25" height="25" />)
              )}
        </div>
      
        <div className={styles.btn__container}>
          <a 
            href={project.github}
            className={styles.btn}
            target="_blank"
            rel="noreferer"
          >Github</a>
          <a 
            href={project.url} 
            className={`${styles.btn} ${styles.btn__primary}`}
            target="_blank"
            rel="noreferer"
          >View Live</a>
        </div>
      
      </div>
    </div>
    )
}