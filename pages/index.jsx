import React from 'react';
import Head from 'next/head';
import Image  from 'next/image';
import styles from '../styles/Home.module.css';
import 'primeicons/primeicons.css';
import { Menubar } from 'primereact/menubar';
import "primereact/resources/themes/lara-dark-purple/theme.css";  
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css";
import Link from 'next/link';
import Typewriter from 'typewriter-effect';                              

export default function Home() {
  const navbar = [
    {
       label: 
       <Link href="#homeSection"><a><Image  src="home.png" alt="home" title="home" width={30} height={30} quality={100}/></a></Link>
    },
    {

       label:
       <Link href="#aboutSection"><a><span className={styles.imgnavbar}><Image  src="user.png" alt="about" title="about" width={30} height={30} quality={100} /></span></a></Link>
    },
    {
       label:
       <Link href="#techSection"><a><span className={styles.imgnavbar}><Image  src="coding.png" alt="tech" title="tech" width={30} height={30} quality={100} /></span></a></Link>
    },
    {
      label:
      <Link href="#contactSection"><a><span className={styles.imgnavbar}><Image  src="contact.png" alt="contact" title="contact" width={30} height={30} quality={100} /></span></a></Link>
    }
   
  ];
  const end = 
    <a href='https://github.com/decofma'><Image  src="github.png" alt="React" title="React" width={30} height={30} quality={100} /></a>
    

  return (
    <>
    
    <div className={styles.container}>
      <Head>
        <title>My portfolio</title>
        <meta  name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={styles.menuStyle}>
        <div className={styles.menuContainer}>
          <Menubar model={navbar} end={end} className={styles.menubar}/>
        </div>
      </div>

      <main className={styles.main}>
        
        <div id="homeSection" className={styles.imagecontainer}>
            <Image  className={styles.image} src="me.png" alt="yep, that's me" layout={"responsive"} width="100%" height={"65px"} quality={100} priority={true}/>
        </div>

        <h1 className={styles.title}>
          <Typewriter 
            onInit={(typewriter) => {
            typewriter.changeDelay(50)
            typewriter.typeString("Hello World! I'm André :)")
            .pauseFor(2500)
            .deleteAll()            
            .start()
            typewriter.typeString("Scroll down to get to know me ⬇")
            .pauseFor(2500)
            .deleteAll()
            typewriter.typeString("Welcome to my portfolio.")
          }}/>
        </h1>
        <div id="aboutSection"></div>
        <div className={styles.bio}>
          <div className={styles.code}>
            I’m a computer engineer and fullstack developer at @WilsonSons
          </div>
        </div>
        
        <div className={styles.cardBoard}>
          <div className={styles.card}>
          <h2> Hi, my name is André Ferraz :)</h2>
          <p>
          Im a fullstack developer currently working as a systems analyst at <b>Wilson Sons </b>. In a nutshell, im responsible for developing solutions like web-apps and apis for the entire company from a solid backend to beautiful and functional frontend. I also worked at <b>Vtex</b> and had my Vtex IO certification to build fluid responsibles e-commerces and <b>Banco Bradesco</b> where i had the experience to focus on IT project management. 

          </p>
          
            
          </div>
          <div id="techSection" className={styles.tech}></div>
          <div className={styles.card}> 
            <h2> Technologies that I work with </h2>
            <div className={styles.langform}>            
              <Image  src="/atom.png" alt="React" title="React" width={50} height={50} quality={100} />            
              <Image  src="/nextjs.png" alt="nextjs" title="Next.js" width={50} height={50} quality={100} />
              <Image  src="/python.png" alt="python" title="Python" width={50} height={50} quality={100} /> 
              <Image  src="/flask.png" alt="flask" title="Flask" width={50} height={50} quality={100} />
              <Image  src="/java-script.png" alt="javascript" title="Javascript"width={50} height={50} quality={100} />
              <Image  src="/type-script.png" alt="typescript" title="Typescript" width={50} height={50} quality={100} />
            </div>
            <div className={styles.langform}>
            <Image  src="/c-.png" alt="c" title="c" width={50} height={50} quality={100} />
            <Image  src="/c-sharp.png" alt="c#" title="c#" width={50} height={50} quality={100} />
            <Image  src="/css-3.png" alt="css" title="css" width={50} height={50} quality={100} />
            <Image  src="/html-5.png" alt="html" title="html" width={50} height={50} quality={100} />
            <Image  src="/photoshop.png" alt="photoshop" title="adobe photoshop" width={50} height={50} quality={100} />
            <Image  src="/illustrator.png" alt="illustrator" title="adobe illustrator" width={50} height={50} quality={100} />
            </div>
          </div>
        </div>
        <div id="contactSection"/>
        <div  className={styles.contactBox}>
          <h2>Where to find me 🙋🏻‍♂️</h2> 
          <div className={styles.contact}>
            
            <a href="https://www.linkedin.com/in/andreamferraz/">
            <Image  src="linkedin.png" alt="React" title="React" width={50} height={50} quality={100} />
            </a>
            <a href="https://www.instagram.com/decofma/">
            <Image  src="insta.png" alt="React" title="React" width={50} height={50} quality={100} />
            </a>
            <a href="mailto:andrem.ferraz@hotmail.com">
            <Image  src="email.png" alt="React" title="React" width={50} height={50} quality={100} />
            </a>
            <a href="https://github.com/decofma">
            <Image  src="github_2.png" alt="React" title="React" width={50} height={50} quality={100} />
            </a>
            <a href="https://linktr.ee/decofma">
            <Image  src="link.png" alt="React" title="React" width={50} height={50} quality={100} />
            </a>
          </div> 
        </div>  
      </main>
      <footer className={styles.footer}>
          Handcrafted using React, Next.js and 💜
          by me.
      </footer>
    </div>
    
    </>
  )
}
