import React, { useState } from 'react';
import Image  from 'next/image';
import styles from '../styles/Home.module.css';        
import Typewriter from 'typewriter-effect';
import {C} from '@/util/constants';

type HomeProps = {
  selectedLanguage: 'ENG' | 'PT';
};

export default function Home({ selectedLanguage }: HomeProps) {
  
  const TypeString = selectedLanguage === 'ENG' ? C.EngType : C.PortType;
  const BioLine = selectedLanguage === 'ENG' ? C.EngLine : C.PortLine;
  const BioTitle = selectedLanguage === 'ENG' ? C.EngBioTitle : C.PortBioTitle;
  const BioText = selectedLanguage === 'ENG' ? C.EngBioText : C.PortBioText;
  const TechTitle = selectedLanguage === 'ENG' ? C.EngTechTitle : C.PortTechTitle;
  const ProjectTitle = selectedLanguage === 'ENG' ? C.EngProjectTitle : C.PortProjectTitle;
  const AdocatText = selectedLanguage === 'ENG' ? C.EngProjectAdocat : C.PortProjectAdocat;
  const ChatBotText = selectedLanguage === 'ENG' ? C.EngProjectChatbot : C.PortProjectChatbot;
  const TicTacToeText = selectedLanguage === 'ENG' ? C.EngProjectVelha : C.PortProjectVelha;
  const TicTacToeTitle = selectedLanguage === 'ENG' ? C.EngTicTacTitle : C.PortTicTacTitle;
  const Contact = selectedLanguage === 'ENG' ? C.EngContactTitle : C.PortContactTitle;

  function redirectToSite(site: string): void {
    window.open(site, '_blank');
  }

  return (
    
    <div className={styles.container}>
  
      <main className={styles.main}>
      
        <div id="homeSection" className={styles.imagecontainer}>
            <Image  className={styles.image} src="/me.png" alt="yep, that's me" width={500} height={500} quality={100} priority={true}/>
        </div>
        <h1 className={styles.title}>
          <Typewriter 
            options={{
              strings: [TypeString.string1, TypeString.string2, TypeString.string3],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed:20
            }}
          />
        </h1>
        
        <div id="aboutSection"/>
        <div className={styles.bioContainer}>
          <div className={styles.code}> 
            {BioLine}
          </div> 
        </div>

        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <h2> {BioTitle} </h2>
            <div className={styles.divider}/>        
            <p> {BioText} </p> 
          </div>            
          <div id="techSection"/>
            <div className={styles.card}> 
              <h2> {TechTitle} </h2>
              <div className={styles.divider}/>        
              <div className={styles.techContainer}>        
                <div className={styles.techGrid}>
                  <div className={styles.techCard}>  <Image  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="python" width={50} height={50} quality={100} /> <p>Python</p> </div>
                  <div className={styles.techCard}>  <Image  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" alt="javascript" width={50} height={50} quality={100} /><p>Javascript</p></div>
                  <div className={styles.techCard}>  <Image  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" alt="typescript" width={50} height={50} quality={100} /><p>Typescript</p></div>
                  <div className={styles.techCard}>  <Image  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-plain.svg" alt="c" width={50} height={50} quality={100} /><p>C</p></div>
                  <div className={styles.techCard}>  <Image  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-plain.svg" alt="c++" width={50} height={50} quality={100} /><p>C++</p> </div>
                  <div className={styles.techCard}>  <Image  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg" alt="c#" width={50} height={50} quality={100} /><p>C#</p> </div>
                  <div className={styles.techCard}>  <Image  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg" alt="dot-net" width={50} height={50} quality={100} /><p>.Net</p> </div>
                </div> 
                <div className={styles.techGrid}>
                  <div className={styles.techCard}><Image  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" width={50} height={50} quality={100} /><p>React</p> </div>           
                  <div className={styles.techCard}><Image  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React-native" width={50} height={50} quality={100} /><p>React Native</p> </div>           
                  <div className={styles.techCard}><Image  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" alt="nextjs" width={50} height={50} quality={100} /><p>Next.js</p> </div>
                  <div className={styles.techCard}><Image  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" alt="flask" width={50} height={50} quality={100} /><p>Flask</p> </div>
                  <div className={styles.techCard}><Image  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="express" width={50} height={50} quality={100} /><p>Express</p> </div>
                  <div className={styles.techCard}><Image  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" alt="django" width={50} height={50} quality={100} /><p>Django</p> </div>
                  <div className={styles.techCard}><Image  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-plain.svg" alt="angular" width={50} height={50} quality={100} /><p>Angular</p> </div>
                  <div className={styles.techCard}><Image  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-plain.svg" alt="vue" width={50} height={50} quality={100} /><p>Vue.js</p> </div>
                  <div className={styles.techCard}><Image  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="tailwind" width={50} height={50} quality={100} /><p>Tailwind</p> </div>
                  <div className={styles.techCard}><Image  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" alt="node" width={50} height={50} quality={100} /><p>Node.js</p> </div>
                  <div className={styles.techCard}><Image  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" alt="graphql"  width={50} height={50} quality={100} /><p>Graphql</p> </div>
                  <div className={styles.techCard}><Image  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-plain.svg" alt="pandas"  width={50} height={50} quality={100} /><p>Pandas</p> </div>
                </div>
                <div className={styles.techGrid}>
                  <div className={styles.techCard}><Image  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg" alt="postgresql" width={50} height={50} quality={100} /><p>Postgresql</p> </div>
                  <div className={styles.techCard}><Image  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain.svg" alt="mongodb"  width={50} height={50} quality={100} /><p>Mongodb</p> </div>
                  <div className={styles.techCard}><Image  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="mysql" width={50} height={50} quality={100} /><p>Mysql</p> </div>
                  <div className={styles.techCard}><Image  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" alt="oracle" width={50} height={50} quality={100} /><p>Oracle</p> </div>
                  <div className={styles.techCard}><Image  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" alt="sqlite" width={50} height={50} quality={100} /><p>Sqlite</p> </div>
                </div>
                <div className={styles.techGrid}>
                  <div className={styles.techCard}><Image  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="figma" width={50} height={50} quality={100} /><p>Figma</p> </div>
                  <div className={styles.techCard}><Image  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="aws" width={50} height={50} quality={100} /><p>AWS</p> </div>
                  <div className={styles.techCard}><Image  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg" alt="docker" width={50} height={50} quality={100} /><p>Docker</p> </div>
                  <div className={styles.techCard}><Image  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-plain.svg" alt="postman" width={50} height={50} quality={100} /><p>Postman</p> </div>
                  <div className={styles.techCard}><Image  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" alt="firebase" width={50} height={50} quality={100} /><p>Firebase</p> </div>
                </div>
              </div>
            </div>
        </div>
        
        <div id="projectsSection"/>
        <div className={styles.projectsContainer}>
          <div className={styles.card}>
            <h2> {ProjectTitle} </h2>
            <div className={styles.divider}/> 
          </div>
          <div className={styles.projectsGrid}>
            <div className={styles.projectCard}>
              <div className={styles.projectTextContainer}>
                <h3> Adocat </h3>
                <p className={styles.projectText}> {AdocatText} </p>
              </div>
              <div className={styles.projectImages}>
                <Image className={styles.projectImage} src="/adocat-mobile.png" alt="adocat mockup" width={400} height={400} quality={100} />
                <div className={styles.projectIcons}>
                  <Image className={styles.projectIcon} onClick={() => redirectToSite(C.GitAdocat)} src="/demonstracao.png" alt="demonstracao mockup" width={50} height={50} quality={100} />
                </div>
              </div>              
            </div>            
            <div className={styles.projectCard}>
              <div className={styles.projectImages}>
                <Image className={styles.projectImage} src="/tictactoe-mobile.png" alt="tictactoe mockup" width={400} height={400} quality={100} />
                <div className={styles.projectIcons}>
                  <Image className={styles.projectIcon} onClick={() => redirectToSite(C.GitVelha)} src="/codigo-fonte.png" alt="codigo mockup" width={55} height={55} quality={100} />
                  <Image className={styles.projectIcon} onClick={() => redirectToSite(C.DemoVelha)} src="/demonstracao.png" alt="demonstracao mockup" width={50} height={50} quality={100} />
                </div>
              </div>              
              <div className={styles.projectTextContainer}>
                <h3> {TicTacToeTitle} </h3>
                <p className={styles.projectText}> {TicTacToeText} </p>
              </div>
            </div>
            <div className={styles.projectCard}>
              <div className={styles.projectTextContainer}>
                <h3> Whatsapp Chatbot </h3>
                <p className={styles.projectText}> {ChatBotText} </p>
              </div>
              <div className={styles.projectImages}>
                <Image className={styles.projectImage} src="/adocat-mobile.png" alt="adocat mockup" width={400} height={400} quality={100} />
                <div className={styles.projectIcons}>
                  <Image className={styles.projectIcon} onClick={() => redirectToSite(C.GitBot)} src="/codigo-fonte.png" alt="codigo mockup" width={50} height={50} quality={100} />
                </div>
              </div>              
            </div> 
            <div className={styles.projectCard}>
              <div className={styles.projectImages}>
                <Image className={styles.projectImage} src="/cha-mobile.png" alt="cha mockup" width={400} height={400} quality={100} />
                <div className={styles.projectIcons}>
                  <Image className={styles.projectIcon} onClick={() => redirectToSite(C.GitCha)} src="/codigo-fonte.png" alt="codigo mockup" width={55} height={55} quality={100} />
                  <Image className={styles.projectIcon} onClick={() => redirectToSite(C.DemoCha)} src="/demonstracao.png" alt="demonstracao mockup" width={50} height={50} quality={100} />
                </div>
              </div>              
              <div className={styles.projectTextContainer}>
                <h3> Rachel&André </h3>
                <p className={styles.projectText}> {TicTacToeText} </p>
              </div>
            </div>            
                                    
          </div>
        </div>

        <div id="contactSection"/>
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
      </main>
      <footer className={styles.footer}>
        <p>
        Handcrafted using React, Next.js and 💜 by me.          
        </p>  
      </footer>
    </div>
    
  );
}
