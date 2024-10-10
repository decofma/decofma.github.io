import Image from "next/image";
import styles from "@/styles/Projects.module.css";
import { C } from "@/util/constants";
import checkVisibility from "../Hook/useVisibility";

type HomeProps = {
  selectedLanguage: "ENG" | "PT";
};

function redirectToSite(site: string): void {
  window.open(site, "_blank");
}

function Projects({ selectedLanguage }: HomeProps) {
  const ProjectTitle =
    selectedLanguage === "ENG" ? C.EngProjectTitle : C.PortProjectTitle;
  const AdocatText =
    selectedLanguage === "ENG" ? C.EngProjectAdocat : C.PortProjectAdocat;
  const ChatBotText =
    selectedLanguage === "ENG" ? C.EngProjectChatbot : C.PortProjectChatbot;
  const TicTacToeText =
    selectedLanguage === "ENG" ? C.EngProjectVelha : C.PortProjectVelha;
  const TicTacToeTitle =
    selectedLanguage === "ENG" ? C.EngTicTacTitle : C.PortTicTacTitle;
  const ChaTitle = selectedLanguage === "ENG" ? C.EngChaTitle : C.PortChaTitle;
  const ChaText =
    selectedLanguage === "ENG" ? C.EngProjectCha : C.PortProjectCha;
  const MonsterText =
    selectedLanguage === "ENG" ? C.EngProjectMonster : C.PortProjectMonster;
  const { isVisible: isAdocatVisible, elementRef: adocatRef } = checkVisibility();
  const { isVisible: isMonsterVisible, elementRef: monsterRef } = checkVisibility();
  const { isVisible: isTicTacVisible, elementRef: tictacRef } = checkVisibility();
  const { isVisible: isChaVisible, elementRef: chaRef } = checkVisibility();

  return (
    <div className={styles.projectsContainer}>
      <div className={styles.card}>
        <h2> {ProjectTitle} </h2>
        <div className={styles.divider} />
        <div className={styles.projectsGrid}>
          <div ref={adocatRef} className={`${styles.projectCard} ${isAdocatVisible ? styles.bounceIn : styles.hidden}`}>
            <div className={styles.projectTextContainer}>
              <h3> Adocat </h3>
              <p className={styles.projectText}> {AdocatText} </p>
            </div>
            <div className={styles.projectImages}>
              <Image
                className={styles.projectImage}
                src="/portfolio/adocat-mockup.png"
                alt="adocat mockup"
                width={300}
                height={300}
                quality={100}
              />

              {/* Ícones aparecem ao passar o mouse */}
              <div className={styles.projectIcons}>
                <Image
                  className={styles.projectIcon}
                  onClick={() => redirectToSite(C.GitAdocat)}
                  src="/icons/github-hover.png"
                  alt="github icon"
                  width={50}
                  height={50}
                  quality={100}
                />

                <Image
                  className={styles.projectIcon}
                  onClick={() => redirectToSite(C.GitAdocat)}
                  src="/icons/web-hover.png"
                  alt="web icon"
                  width={50}
                  height={50}
                  quality={100}
                />
              </div>
            </div>
          </div>

          <div ref={monsterRef} className={`${styles.projectCard} ${isMonsterVisible ? styles.bounceIn : styles.hidden}`}>
            <div className={styles.projectImages}>
              <Image
                className={styles.projectImage}
                src="/portfolio/monsterburguer-mockup.png"
                alt="monster mockup"
                width={300}
                height={300}
                quality={100}
              />

              {/* Ícones aparecem ao passar o mouse */}
              <div className={styles.projectIcons}>
                <Image
                  className={styles.projectIcon}
                  onClick={() => redirectToSite(C.GitMonster)}
                  src="/icons/github-hover.png"
                  alt="github icon"
                  width={50}
                  height={50}
                  quality={100}
                />

                <Image
                  className={styles.projectIcon}
                  onClick={() => redirectToSite(C.DemoMonster)}
                  src="/icons/web-hover.png"
                  alt="web icon"
                  width={50}
                  height={50}
                  quality={100}
                />
              </div>
            </div>
            <div className={styles.projectTextContainer}>
              <h3> MonsterBurguer </h3>
              <p className={styles.projectText}> {MonsterText} </p>
            </div>
          </div>

          <div ref={tictacRef} className={`${styles.projectCard} ${isTicTacVisible ? styles.bounceIn : styles.hidden}`}>
            <div className={styles.projectTextContainer}>
              <h3> {TicTacToeTitle} </h3>
              <p className={styles.projectText}> {TicTacToeText} </p>
            </div>
            <div className={styles.projectImages}>
              <Image
                className={styles.projectImage}
                src="/portfolio/tictactoe-mockup.png"
                alt="adocat mockup"
                width={300}
                height={300}
                quality={100}
              />

              {/* Ícones aparecem ao passar o mouse */}
              <div className={styles.projectIcons}>
                <Image
                  className={styles.projectIcon}
                  onClick={() => redirectToSite(C.GitVelha)}
                  src="/icons/github-hover.png"
                  alt="github icon"
                  width={50}
                  height={50}
                  quality={100}
                />

                <Image
                  className={styles.projectIcon}
                  onClick={() => redirectToSite(C.DemoVelha)}
                  src="/icons/web-hover.png"
                  alt="web icon"
                  width={50}
                  height={50}
                  quality={100}
                />
              </div>
            </div>
          </div>

          <div ref={chaRef} className={`${styles.projectCard} ${isChaVisible ? styles.bounceIn : styles.hidden}`}>
            <div className={styles.projectImages}>
              <Image
                className={styles.projectImage}
                src="/portfolio/cha-mockup.png"
                alt="cha mockup"
                width={300}
                height={300}
                quality={100}
              />

              {/* Ícones aparecem ao passar o mouse */}
              <div className={styles.projectIcons}>
                <Image
                  className={styles.projectIcon}
                  onClick={() => redirectToSite(C.GitAdocat)}
                  src="/icons/github-hover.png"
                  alt="github icon"
                  width={50}
                  height={50}
                  quality={100}
                />

                <Image
                  className={styles.projectIcon}
                  onClick={() => redirectToSite(C.GitAdocat)}
                  src="/icons/web-hover.png"
                  alt="web icon"
                  width={50}
                  height={50}
                  quality={100}
                />
              </div>
            </div>
            <div className={styles.projectTextContainer}>
              <h3>{ChaTitle} </h3>
              <p className={styles.projectText}> {ChaText} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
