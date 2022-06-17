import styles from "./Header.module.css";
import Ribbon from "./Ribbon";
import HeaderSocials from "./HeaderSocials";
import me from "../../assets/me.png";
import Image from "next/image";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={`container ${styles.header__container}`}>
        <h5>Hello I&apos;m</h5>
        <h1>Abdul Kader</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        
        <Ribbon />
        
        <div className={styles.me}>
          <Image src={me} alt="me" layout="fill" />
        </div>
        
        <a href="#contact" className={styles.scroll__down}>Scroll Down</a>
        
        <HeaderSocials />
      </div>
    </div>)
}