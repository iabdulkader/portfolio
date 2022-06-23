import styles from "./Contact.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io";
import toast from "react-hot-toast";

export default function Contact() {
  
  const submit = e => {
    e.preventDefault();
    toast.loading("Sending")
    
    const send = async () => {
      const respose = await fetch("/api/email", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value, 
          message: e.target.message.value, 
        })
      })
      
      const data = await respose.json()
      
      if(data.done){
        toast.dismiss();
        e.target.reset();
        toast.success("Message Sent Successfully.")
      } else {
        toast.dismiss();
        e.target.reset();
        toast.error("Something went wrong.")
      }
    }
    
    send()
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
            <a href="mailto:abdulkadernow@gmail.com" target="_blank" rel="noreferrer">Send A Mail</a>
          </article>
          
          <article className={styles.contact__option}>
            <RiMessengerLine className={styles.icon__style} />
            <h4>Messenger</h4>
            <h5 className="text-light">Abdul Kader</h5>
            <a href="https://m.me/itsabdulkader" target="_blank" rel="noreferrer">Send A Message</a>
          </article>
          
          <article className={styles.contact__option}>
            <IoLogoTwitter className={styles.icon__style} />
            <h4>Twitter</h4>
            <h5 className="text-light">itsabdulkader</h5>
            <a href="https://twitter.com/itsabdulkader" target="_blank" rel="noreferrer">Connect</a>
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