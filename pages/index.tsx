import React from 'react';
import Image  from 'next/image';
import styles from '../styles/Home.module.css';        
import Typewriter from 'typewriter-effect';

type HomeProps = {
  selectedLanguage: 'ENG' | 'PT';
};

export default function Home({ selectedLanguage }: HomeProps) {
  
    

  return (
    
    <div className={styles.container}>
  
      <main className={styles.main}>
      {selectedLanguage === 'ENG' ? <>
        {/* ENG */}
        <div id="homeSection" className={styles.imagecontainer}>
            <Image  className={styles.image} src="/me.png" alt="yep, that's me" width={500} height={500} quality={100} priority={true}/>
        </div>
        <h1 className={styles.title}>
          <Typewriter 
            options={{
              strings: ['Hello World! I`m André :)', 'Scroll down to get to know me ⬇', 'Welcome to my portfolio.'],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed:20
            }}
          />
        </h1>
        <div id="aboutSection"/>
        <div className={styles.bio}>
          <div className={styles.code}> 
            I`m a software engineer and fullstack developer @ WilsonSons
          </div> 
        </div>
        
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <h2> ABOUT ME </h2>
            <div className={styles.divider}/>        

            <p>
              As the header says, I`m a software engineer and full stack systems analyst at <b>Wilson Sons</b>. I`m responsible for developing web-apps solutions and APIs for the entire company, from a solid backend to a functional UX driven frontend.
              I also worked at <b>Vtex</b> and obtained my Vtex IO certification to develop fluid, functional and responsive e-commerce solutions. Moreover, I got the hang of Agile methodologies like Kanban and Scrum and gained valuable experience managing IT projects during my time at <b>Banco Bradesco</b>.
            </p> 
          </div>
          <div id="techSection"/>
            <div className={styles.card}> 
              <h2> Technologies that I work with </h2>
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
            <h2> Projects </h2>
            <div className={styles.divider}/> 
          </div>
          <div className={styles.projectsGrid}>
            <div className={styles.project}>
              <div><Image  src="/adocat-mockup.png" alt="React" width={500} height={500} quality={100} /></div>
              <div className={styles.projectTextContainer}>
                <p className={styles.projectText}>
                  Final Paper project in which an application for cat adoption was developed, using React Native, Prisma, PostgreSQL, Render, and SQLite technologies.
                </p>
              </div>
            </div>
            <div className={styles.project}>
              <div><Image  src="/wppgpt-mockup.png" alt="React" width={500} height={500} quality={100} /></div>
              <div className={styles.projectTextContainer}>
                <p className={styles.projectText}>
                  Study project on OpenAI, where a WhatsApp chatbot was developed using Typescript.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div id="contactSection"/>
        <div  className={styles.contactBox}>
          <h2>Where to find me</h2> 
          <div className={styles.contact}>
            
            <a href="https://www.linkedin.com/in/andreamferraz/"> 
            <Image  src="/linkedin.png" alt="React" width={50} height={50} quality={100} />
            </a>
            <a href="https://medium.com/@decofma">
            <Image  src="/blogger.png" alt="React" width={50} height={50} quality={100} />
            </a>
            <a href="mailto:andrem.ferraz@hotmail.com">
            <Image  src="/o-email.png" alt="React" width={50} height={50} quality={100} />
            </a>
            <a href="https://github.com/decofma"> 
            <Image  src="/github.png" alt="React" width={50} height={50} quality={100} />
            </a>
            <a href="https://linktr.ee/decofma"> 
            <Image  src="/ligacao.png" alt="React" width={50} height={50} quality={100} />
            </a>
          </div> 
        </div>  
        </> : <>
        {/* PT */}
        <div id="homeSection" className={styles.imagecontainer}>
            <Image  className={styles.image} src="/me.png" alt="sou eu" width={500} height={500} quality={100} priority={true}/>
        </div>
        <h1 className={styles.title}>
          <Typewriter 
            options={{
              strings: ['Olá, Mundo! Eu sou o André :)', 'Arraste pra baixo para me conhecer melhor ⬇', 'Bem vind@ ao meu portifólio.'],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed:20
            }}
          />
        </h1>
        <div id="aboutSection"/>
        <div className={styles.bio}>
          <div className={styles.code}> 
            Eu sou engenheiro de software e desenvolvedor fullstack @ WilsonSons
          </div> 
        </div>
        
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <h2> SOBRE MIM </h2>
            <div className={styles.divider}/>        

            <p>
              Como fala ali acima, sou engenheiro de software e analista de sistemas full stack na <b>Wilson Sons</b>. Sou responsável por desenvolver soluções de web-apps e APIs para toda a empresa, desde um backend sólido até um frontend funcional orientado para UX.
              Além disso, trabalhei na <b>Vtex</b> e obtive minha certificação Vtex IO para desenvolver soluções de e-commerce fluidas, funcionais e responsivas. Além disso, me familiarizei com metodologias ágeis como Kanban e Scrum e adquiri uma valiosa experiência na gestão de projetos de TI durante meu tempo no <b>Banco Bradesco</b>.            </p> 
          </div>
          <div id="techSection"/>
            <div className={styles.card}> 
              <h2> Habilidades </h2>
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
            <h2> Projetos </h2>
            <div className={styles.divider}/> 
          </div>
          <div className={styles.projectsGrid}>
            <div className={styles.project}>
              <div><Image  src="/adocat-mockup.png" alt="React" width={500} height={500} quality={100} /></div>
              <div className={styles.projectTextContainer}>
                <p className={styles.projectText}>
                  Projeto de monografia, onde foi desenvolvido uma aplicação para adoção de gatos, utlizando React Native, Prisma, PostgreSQL, Render e SQLite.
                </p>
              </div>
            </div>
            <div className={styles.project}>
              <div><Image  src="/wppgpt-mockup.png" alt="React" width={500} height={500} quality={100} /></div>
              <div className={styles.projectTextContainer}>
                <p className={styles.projectText}>
                  Projeto de estudo sobre a OpenAi, onde foi desenvolvido um chatbot no WhatsApp, utlizando Typescript.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div id="contactSection"/>
        <div  className={styles.contactBox}>
          <h2>Contato</h2> 
          <div className={styles.contact}>
            
            <a href="https://www.linkedin.com/in/andreamferraz/"> 
            <Image  src="/linkedin.png" alt="React" width={50} height={50} quality={100} />
            </a>
            <a href="https://medium.com/@decofma">
            <Image  src="/blogger.png" alt="React" width={50} height={50} quality={100} />
            </a>
            <a href="mailto:andrem.ferraz@hotmail.com">
            <Image  src="/o-email.png" alt="React" width={50} height={50} quality={100} />
            </a>
            <a href="https://github.com/decofma"> 
            <Image  src="/github.png" alt="React" width={50} height={50} quality={100} />
            </a>
            <a href="https://linktr.ee/decofma"> 
            <Image  src="/ligacao.png" alt="React" width={50} height={50} quality={100} />
            </a>
          </div> 
        </div>  
        </>
      }
      </main>
      <footer className={styles.footer}>
        <p>
        Handcrafted using React, Next.js and 💜 by me.          
        </p>  
      </footer>
    </div>
    
  );
}
