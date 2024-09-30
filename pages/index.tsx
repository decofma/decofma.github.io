import React, { useEffect, useState } from 'react';
import Image  from 'next/image';
import styles from '../styles/Home.module.css';        
import Typewriter from 'typewriter-effect';
import {C} from '@/util/constants';
import Hardskills from '@/components/Hardskills/hardskills';
import Projects from '@/components/Projects/projects';
import Contact from '@/components/Contact/contact';
import { useRouter } from "next/router";
import Link from 'next/link';
import { useTheme } from "@/context/ThemeContext";


type HomeProps = {
  selectedLanguage: 'ENG' | 'PT';
};

export default function Home({ selectedLanguage }: HomeProps) {
  const router = useRouter();
  const TypeString = selectedLanguage === 'ENG' ? C.EngType : C.PortType;
  const BioLine = selectedLanguage === 'ENG' ? C.EngLine : C.PortLine;
  const BioTitle = selectedLanguage === 'ENG' ? C.EngBioTitle : C.PortBioTitle;
  const BioText = selectedLanguage === 'ENG' ? C.EngBioText : C.PortBioText;
  const { theme } = useTheme();
  const handleDownload = () => {
    const fileToDownload = selectedLanguage === 'ENG'
      ? '/archives/andre-ferraz-resume.pdf'
      : '/archives/andre-ferraz-curriculo.pdf';
    router.push(fileToDownload);
  };

  return (
    
    <div className={styles.container}>
  
      <main className={styles.main}>
      
        <div id="homeSection" className={styles.imagecontainer}>
            <Image  className={styles.image} src="/me-v2.jpg" alt="yep, that's me" width={500} height={500} quality={100} priority={true}/>
        </div>
        <h1 className={styles.title}>
          <Typewriter 
            options={{
              strings: [TypeString.string1, TypeString.string2, TypeString.string3],
              autoStart: true,
              loop: true,
              delay: 70,
              deleteSpeed:30,
              // @ts-ignore
              pauseFor:2000
            }}
          />
        </h1>
        <div className={styles.bioContainer}>
          <div className={styles.code}> 
            {BioLine}
          </div> 
          <div className={styles.bioIcons} 
          style={{ filter: theme === 'dark' ? 'invert(1)' : 'none' }}
          >
            <Link href="https://www.linkedin.com/in/andreamferraz/" target="_blank" rel="noopener noreferrer">
              <Image src={'/icons/linkedin.png'} width={25} height={25} alt="LinkedIn" />
            </Link>
            <Link href="https://github.com/decofma" target="_blank" rel="noopener noreferrer">      
              <Image src={'/icons/git.png'} width={25} height={25} alt='github'/>
            </Link>
            <Link href="https://medium.com/@decofma" target="_blank" rel="noopener noreferrer">
              <Image src={'/icons/blog.png'} width={25} height={25} alt='medium'/>
            </Link>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.bioButton} onClick={handleDownload}>
              { selectedLanguage === 'ENG' ? 'See Resume' : 'Ver Currículo'}
            </button>
          </div>
        </div>


        <div id="aboutSection"/>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <h2> {BioTitle} </h2>
            <div className={styles.divider}/> 
            <p> {BioText} </p> 
          </div>            
          <div id="techSection"/>
          <Hardskills selectedLanguage={selectedLanguage}/>
        </div>
        
        <div id="projectsSection"/>
        <Projects selectedLanguage={selectedLanguage}/>

        <div id="contactSection"/>
        <Contact selectedLanguage={selectedLanguage}/>
      </main>
      <footer className={styles.footer}>
        <p>
        Handcrafted using React, Next.js and <span>💜</span> by me.          
        </p>  
      </footer>
    </div>
    
  );
}
