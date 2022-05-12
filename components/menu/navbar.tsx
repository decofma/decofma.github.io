import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Home.module.css';

const navbar = [
   {
      label: 
      <Link href="#home"><a><Image  src="home.png" alt="home" title="home" width={30} height={30} quality={100}/></a></Link>
   },
   {

      label:
      <Link href="#about"><a><span className={styles.imgnavbar}><Image  src="user.png" alt="about" title="about" width={30} height={30} quality={100} /></span></a></Link>
   },
   {
      label:
      <Link href="#tech"><a><span className={styles.imgnavbar}><Image  src="coding.png" alt="tech" title="tech" width={30} height={30} quality={100} /></span></a></Link>
   },
   {
     label:
     <Link href="#contact"><a><span className={styles.imgnavbar}><Image  src="contact.png" alt="contact" title="contact" width={30} height={30} quality={100} /></span></a></Link>
   }
  
 ];
 const end = 
   <a href='https://github.com/decofma'><Image  src="github.png" alt="React" title="React" width={30} height={30} quality={100} /></a>

export default {navbar, end};