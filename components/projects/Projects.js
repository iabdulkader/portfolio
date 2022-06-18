import styles from "./Projects.module.css";
import Project from "./Project";
import { useState, useEffect } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    const func = async () => {
      const data = await fetch("/api/projects")
      const projects = await data.json()
      
      setProjects(projects)
    }
   
    func()
  }, [])
  
  return(
    <section id="projects">
      <h5>Some Projects I&apos;ve Done</h5>
      <h2>Projects</h2>
      
      <div className={`container ${styles.projects__container}`}>
        {projects.map(project => <Project project={project} />)}
      </div>
    </section>)
}