import Image  from 'next/image';
import styles from '@/styles/Contact.module.css';      
import {C} from '@/util/constants';

type HomeProps = {
    selectedLanguage: 'ENG' | 'PT';
  };

function Contact({ selectedLanguage }: HomeProps) {
    const Contact = selectedLanguage === 'ENG' ? C.EngContactTitle : C.PortContactTitle;

    return (
        <div className={styles.contactContainer}>
          <div className={styles.card}>
            <h2> {Contact} </h2>
            <div className={styles.divider}/> 
          </div>
          
          <div className={styles.contact}>
            
            <a href="https://www.linkedin.com/in/andreamferraz/"> 
            <Image  src="/linkedin.png" alt="linkedin icon" width={50} height={50} quality={100} />
            </a>
            <a href="https://medium.com/@decofma">
            <Image  src="/blogger.png" alt="medium icon" width={50} height={50} quality={100} />
            </a>
            <a href="mailto:andrem.ferraz@hotmail.com">
            <Image  src="/o-email.png" alt="mail me icon" width={50} height={50} quality={100} />
            </a>
            <a href="https://github.com/decofma"> 
            <Image  src="/github.png" alt="github icon" width={50} height={50} quality={100} />
            </a>
            <a href="https://linktr.ee/decofma"> 
            <Image  src="/ligacao.png" alt="link icon" width={50} height={50} quality={100} />
            </a>
          </div> 
        </div>  
    )
}
export default Contact
