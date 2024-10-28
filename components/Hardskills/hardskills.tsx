import Image from "next/image";
import styles from "@/styles/Hardskills.module.css";
import { C } from "@/util/constants";
import { useEffect, useRef, useState } from "react";
import checkVisibility from "../Hook/useVisibility";

type HomeProps = {
  selectedLanguage: "ENG" | "PT";
};

function Hardskills({ selectedLanguage }: HomeProps) {
  const { isVisible: isSkillVisible, elementRef: skillRef } = checkVisibility();
  const { isVisible: isSkill2Visible, elementRef: skill2Ref } = checkVisibility();
  const { isVisible: isSkill3Visible, elementRef: skill3Ref } = checkVisibility();
  const { isVisible: isSkill4Visible, elementRef: skill4Ref } = checkVisibility();
  const { isVisible: isSkill5Visible, elementRef: skill5Ref } = checkVisibility();
  const { isVisible: isSkill6Visible, elementRef: skill6Ref } = checkVisibility();
  const hardskillsRef = useRef<HTMLDivElement>(null);
  const TechTitle =
    selectedLanguage === "ENG" ? C.EngTechTitle : C.PortTechTitle;

  return (
    <div className={styles.techContainer}>
      <div className={styles.card}>
        <h2> {TechTitle} </h2>
        <div className={styles.divider} />
        {/* <div ref={skill2Ref} className={`${styles.techGrid} ${isSkill2Visible ? styles.bounceIn : styles.hidden} ${styles.p}`}>
        </div> */}
        <div ref={skillRef} className={`${styles.techGrid} ${isSkillVisible ? styles.enterLeft : styles.hidden} ${styles.p}`}>
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
         
        </div>
        <div ref={skill2Ref} className={`${styles.techGrid} ${isSkill2Visible ? styles.enterRight : styles.hidden} ${styles.p}`}>
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
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
              alt="vue"
              width={30}
              height={30}
              quality={100}
            />
            <p>Vue.js</p>{" "}
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
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg"
              alt="jest"
              width={30}
              height={30}
              quality={100}
            />
            <p>Jest</p>{" "}
          </div>
          <div className={styles.techCard}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytest/pytest-plain.svg"
              alt="pytest"
              width={30}
              height={30}
              quality={100}
            />
            <p>Pytest</p>{" "}
          </div>
        </div>
        <div ref={skill3Ref} className={`${styles.techGrid} ${isSkill3Visible ? styles.enterLeft : styles.hidden} ${styles.p}`}>
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
          <div className={styles.techCard}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
              alt="Prisma"
              width={30}
              height={30}
              quality={100}
            />
            <p>Prisma</p>{" "}
          </div>
        </div>
        <div ref={skill4Ref} className={`${styles.techGrid} ${isSkill4Visible ? styles.enterRight : styles.hidden} ${styles.p}`}>
          <div className={styles.techCard}>
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABmElEQVR4nOWVvUoDURCFPyMW/gTENrEzQjQEbNTHiCJpfYP4Emp6fxBR0FYkAZFoSq0EX0ElnWn8S9AQEY1cPQuX5W5wZQvBA5fdmT1z5t6Zmwn8FywBHd8qRJlg35FgLyrxCaAm0VlgRu81fQuFHuAcKAN5YBP4kOAbMAD0672jbxvilhUb65Zg0VGKNrAGpC1eWr62g280nBgCbkXaAS6AKyDbZUNZcQx3V7FGI+4ir1qEPvl69RxXCZpaJSDl45iYujSKrgRzwIsIpzqRJ/7gKMUdkPhifHOr8huNHAGYBloiZuQryz6WYBKoyHcgTkZ2Sxpd8SzyoOymbG+3BqPyPVkn6CiWsAkaspNRJHCVqCS7oiRG/ES+wzAlyllNrlpNTqmh/ibfA2NhmlwUoW5d05ieCTW0oXVoif8Y8V/80EIjaFSs+0aFwaU24cFwX4EVy3YOuzM1Nq9B9m4NOw8j6sEjMGwJpnStAxO4MGmNaw8LwJFu1rzvBMthE6A/Fztg2yrhVoBgqAQFX8CNmj8FXEeR4O/iE/WUpf/v7Ub/AAAAAElFTkSuQmCC"
              alt="Rest"
              width={30}
              height={30}
              quality={100}
            />
            <p>Rest</p>{" "}
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
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-plain.svg"
              alt="fastapi"
              width={30}
              height={30}
              quality={100}
            />
            <p>Fastapi</p>{" "}
          </div>
          <div className={styles.techCard}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-plain.svg"
              alt="Swagger"
              width={30}
              height={30}
              quality={100}
            />
            <p>Swagger</p>{" "}
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
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-plain.svg"
              alt="Oauth"
              width={30}
              height={30}
              quality={100}
            />
            <p>OAuth/OAuth2</p>{" "}
          </div>
        </div>
        <div ref={skill5Ref} className={`${styles.techGrid} ${isSkill5Visible ? styles.enterLeft : styles.hidden} ${styles.p}`}>

          <div className={styles.techCard}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-plain.svg"
              alt="Jira"
              width={30}
              height={30}
              quality={100}
            />
            <p>Jira</p>{" "}
          </div>
          <div className={styles.techCard}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-plain.svg"
              alt="Trello"
              width={30}
              height={30}
              quality={100}
            />
            <p>Trello</p>{" "}
          </div>
          <div className={styles.techCard}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-plain.svg"
              alt="Slack"
              width={30}
              height={30}
              quality={100}
            />
            <p>Slack</p>{" "}
          </div>
          <div className={styles.techCard}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/anaconda/anaconda-original.svg"
              alt="Anaconda"
              width={30}
              height={30}
              quality={100}
            />
            <p>Anaconda</p>{" "}
          </div>
          <div className={styles.techCard}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg"
              alt="Eclipse"
              width={30}
              height={30}
              quality={100}
            />
            <p>Eclipse</p>{" "}
          </div>
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
        </div>
        <div ref={skill6Ref} className={`${styles.techGrid} ${isSkill6Visible ? styles.enterRight : styles.hidden} ${styles.p}`}>
          
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
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
              alt="firebase"
              width={30}
              height={30}
              quality={100}
            />
            <p>Firebase</p>{" "}
          </div>
          <div className={styles.techCard}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain.svg"
              alt="Git"
              width={30}
              height={30}
              quality={100}
            />
            <p>Git</p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hardskills;
