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
       label:<Link href="#home">Home</Link>,
       icon:'pi pi-fw pi-home'
    },
    {
       label:<Link href="#about">About</Link>,
       icon:'pi pi-fw pi-user'
    },
    {
       label:<Link href="#tech">Tech</Link>,
       icon:'pi pi-fw pi-hashtag'
    },
    {
      label:<Link href="#contact">Contact</Link>,
      icon:'pi pi-fw pi-at'
    }
   
  ];
  const end = 
    <a href='https://github.com/decofma'>
    <i className="pi pi-github" style={{'fontSize': '2em'}} ></i>
    </a>
  ;
    
  

  return (
    <>
    
    <div className={styles.container}>
      <Head>
        <title>My portfolio</title>
        <meta name="description" content="developed using next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={styles.menuStyle}>
        <Menubar model={navbar} end={end} />
      </div>

      <main className={styles.main}>
        
        <div id="home">
            <Image  src="me_fuyhxy.png" alt="yep, that's me" width={1000} height={700} layout={"fixed"} quality={100} />
        </div>

        <h1 className={styles.title}>
          <Typewriter 
            onInit={(typewriter) => {
            typewriter.typeString("Hello World! I'm André :)")
            .callFunction(() => {
              console.log('String typed out!');
            })
            .pauseFor(2500)
            .deleteAll()
            .callFunction(() => {
              console.log('All strings were deleted');
            })
            .start();
            typewriter.typeString("Scroll down to get to know me ⬇")
            .pauseFor(2500)
            .deleteAll()
            typewriter.typeString("Welcome to my portfolio.")
          }}/>
        </h1>
        <div id="about"></div>
        <div className={styles.bio}>
          <h3>A short bio</h3>
        </div>
        <code className={styles.code}>
            I’m a computer engineering student and fullstack developer in process
        </code>
        
        <div className={styles.cardBoard}>
          <div className={styles.card}>
          <h2> Hi, my name is André Ferraz :)</h2>
          <p>
            I’m a computer engineering student and started my career at <b>VTEX SMB Group</b> as a marketing intern for 2y. I founded an agency focused on e-commerce where I managed all the processses, people and start developing websites and mobile apps. Later on I worked on the management of IT projects at <b>Banco Bradesco</b> for 2.5y. Nowadays I am a system developer at <b>Wilson, Sons</b> and heading to became a fullstack developer.
            
          </p>
          
            
          </div>
          <div id="tech" className={styles.tech}></div>
          <div className={styles.card}> 
            <h2> Technologies that i work with </h2>
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
        <div id="contact"/>
        <div  className={styles.contactBox}>
          <h2>Where to find me 🙋🏻‍♂️</h2> 
          <div className={styles.contact}>
            
            <a href="https://www.linkedin.com/in/andreamferraz/">
            <i className="pi pi-linkedin" style={{'fontSize': '2em'}}></i>
            </a>
            <a href="https://www.instagram.com/decofma/">
            <i className="pi pi-instagram" style={{'fontSize': '2em'}}></i>
            </a>
            <a href="mailto:andrem.ferraz@hotmail.com">
            <i className="pi pi-envelope" style={{'fontSize': '2em'}}></i>
            </a>
            <a href="https://github.com/decofma">
            <i className="pi pi-github" style={{'fontSize': '2em'}}></i>
            </a>
            <a href="https://linktr.ee/decofma">
            <i className="pi pi-globe" style={{'fontSize': '2em'}}></i>
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
