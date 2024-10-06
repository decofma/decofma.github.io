import Image from "next/image";
import styles from "@/styles/Hardskills.module.css";
import { C } from "@/util/constants";
import { useEffect, useRef, useState } from "react";

type HomeProps = {
  selectedLanguage: "ENG" | "PT";
};

function Hardskills({ selectedLanguage }: HomeProps) {
  const [isVisible, setIsVisible] = useState(false);
  const hardskillsRef = useRef<HTMLDivElement>(null);
  const TechTitle =
    selectedLanguage === "ENG" ? C.EngTechTitle : C.PortTechTitle;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 } // 10% da seção visível dispara a animação
    );

    if (hardskillsRef.current) {
      observer.observe(hardskillsRef.current);
    }

    return () => {
      if (hardskillsRef.current) {
        observer.unobserve(hardskillsRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.card}>
      <h2> {TechTitle} </h2>
      <div className={styles.divider} />
      <div className={styles.techContainer}>
        <div className={styles.techGrid}>
          <div className={styles.techCard}>
            {" "}
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
              alt="python"
              width={30}
              height={30}
              quality={100}
            />{" "}
            <p>Python</p>{" "}
          </div>
          <div className={styles.techCard}>
            {" "}
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
              alt="javascript"
              width={30}
              height={30}
              quality={100}
            />
            <p>Javascript</p>
          </div>
          <div className={styles.techCard}>
            {" "}
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg"
              alt="typescript"
              width={30}
              height={30}
              quality={100}
            />
            <p>Typescript</p>
          </div>
          <div className={styles.techCard}>
            {" "}
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-plain.svg"
              alt="c"
              width={30}
              height={30}
              quality={100}
            />
            <p>C</p>
          </div>
          <div className={styles.techCard}>
            {" "}
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-plain.svg"
              alt="c++"
              width={30}
              height={30}
              quality={100}
            />
            <p>C++</p>{" "}
          </div>
          <div className={styles.techCard}>
            {" "}
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg"
              alt="c#"
              width={30}
              height={30}
              quality={100}
            />
            <p>C#</p>{" "}
          </div>
          <div className={styles.techCard}>
            {" "}
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg"
              alt="dot-net"
              width={30}
              height={30}
              quality={100}
            />
            <p>.Net</p>{" "}
          </div>
        </div>
        <div className={styles.techGrid}>
          <div className={styles.techCard}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              alt="React"
              width={30}
              height={30}
              quality={100}
            />
            <p>React</p>{" "}
          </div>
          <div className={styles.techCard}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              alt="React-native"
              width={30}
              height={30}
              quality={100}
            />
            <p>React Native</p>{" "}
          </div>
          <div className={styles.techCard}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
              alt="nextjs"
              width={30}
              height={30}
              quality={100}
            />
            <p>Next.js</p>{" "}
          </div>
          <div className={styles.techCard}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"
              alt="flask"
              width={30}
              height={30}
              quality={100}
            />
            <p>Flask</p>{" "}
          </div>
          <div className={styles.techCard}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
              alt="express"
              width={30}
              height={30}
              quality={100}
            />
            <p>Express</p>{" "}
          </div>
          <div className={styles.techCard}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"
              alt="django"
              width={30}
              height={30}
              quality={100}
            />
            <p>Django</p>{" "}
          </div>
          <div className={styles.techCard}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-plain.svg"
              alt="angular"
              width={30}
              height={30}
              quality={100}
            />
            <p>Angular</p>{" "}
          </div>
          <div className={styles.techCard}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-plain.svg"
              alt="vue"
              width={30}
              height={30}
              quality={100}
            />
            <p>Vue.js</p>{" "}
          </div>
          <div className={styles.techCard}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              alt="tailwind"
              width={30}
              height={30}
              quality={100}
            />
            <p>Tailwind</p>{" "}
          </div>
          <div className={styles.techCard}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg"
              alt="node"
              width={30}
              height={30}
              quality={100}
            />
            <p>Node.js</p>{" "}
          </div>
          <div className={styles.techCard}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg"
              alt="graphql"
              width={30}
              height={30}
              quality={100}
            />
            <p>Graphql</p>{" "}
          </div>
          <div className={styles.techCard}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-plain.svg"
              alt="pandas"
              width={30}
              height={30}
              quality={100}
            />
            <p>Pandas</p>{" "}
          </div>
        </div>
        <div className={styles.techGrid}>
          <div className={styles.techCard}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg"
              alt="postgresql"
              width={30}
              height={30}
              quality={100}
            />
            <p>Postgresql</p>{" "}
          </div>
          <div className={styles.techCard}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain.svg"
              alt="mongodb"
              width={30}
              height={30}
              quality={100}
            />
            <p>Mongodb</p>{" "}
          </div>
          <div className={styles.techCard}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
              alt="mysql"
              width={30}
              height={30}
              quality={100}
            />
            <p>Mysql</p>{" "}
          </div>
          <div className={styles.techCard}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg"
              alt="oracle"
              width={30}
              height={30}
              quality={100}
            />
            <p>Oracle</p>{" "}
          </div>
          <div className={styles.techCard}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg"
              alt="sqlite"
              width={30}
              height={30}
              quality={100}
            />
            <p>Sqlite</p>{" "}
          </div>
        </div>
        <div className={styles.techGrid}>
          <div className={styles.techCard}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
              alt="figma"
              width={30}
              height={30}
              quality={100}
            />
            <p>Figma</p>{" "}
          </div>
          <div className={styles.techCard}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
              alt="aws"
              width={30}
              height={30}
              quality={100}
            />
            <p>AWS</p>{" "}
          </div>
          <div className={styles.techCard}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg"
              alt="docker"
              width={30}
              height={30}
              quality={100}
            />
            <p>Docker</p>{" "}
          </div>
          <div className={styles.techCard}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-plain.svg"
              alt="postman"
              width={30}
              height={30}
              quality={100}
            />
            <p>Postman</p>{" "}
          </div>
          <div className={styles.techCard}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
              alt="firebase"
              width={30}
              height={30}
              quality={100}
            />
            <p>Firebase</p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hardskills;
