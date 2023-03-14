import styles from "./Header.module.css";

export default function Ribbon() {
  return (
    <div className={styles.ribbon}>
      <a href="/abdulkader.pdf" className="btn">Download CV</a>
      <a href="#contact" className="btn btn-primary">Let&apos;s Talk</a>
    </div>)
}