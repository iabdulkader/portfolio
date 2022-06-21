import styles from "./Contact.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io";

export default function Contact() {
  
  const submit = e => {
    e.preventDefault();
    console.log(e.target)
    //e.target.reset()
    
    
  }
  
  return(
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>
      
      <div className={`container ${styles.contact__container}`}>
        
        <div className={styles.contact__options}>
          <article className={styles.contact__option}>
            <MdOutlineEmail className={styles.icon__style} />
            <h4>Email</h4>
            <h5 className="text-light">abdulkadernow@gmail.com</h5>
            <a href="mailto:abdulkadernow@gmail.com">Send A Mail</a>
          </article>
          
          <article className={styles.contact__option}>
            <RiMessengerLine className={styles.icon__style} />
            <h4>Messenger</h4>
            <h5 className="text-light">Abdul Kader</h5>
            <a href="https://m.me/itsabdulkader">Send A Message</a>
          </article>
          
          <article className={styles.contact__option}>
            <IoLogoTwitter className={styles.icon__style} />
            <h4>Twitter</h4>
            <h5 className="text-light">itsabdulkader</h5>
            <a href="https://twitter.com/itsabdulkader">Connect</a>
          </article>
          
        </div>
        
        <form onSubmit={submit}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea rows="7" name="message" placeholder="Your Message" required />
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>)
}