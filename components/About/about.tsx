import styles from "@/styles/About.module.css";
import { C } from "@/util/constants";
import checkVisibility from "../Hook/useVisibility";

type HomeProps = {
  selectedLanguage: "ENG" | "PT";
};

function About({ selectedLanguage }: HomeProps) {
  const BioTitle = selectedLanguage === "ENG" ? C.EngBioTitle : C.PortBioTitle;
  const BioText = selectedLanguage === "ENG" ? C.EngBioText : C.PortBioText;

  // Usando o hook useVisibility para h2 e p
  const { isVisible: isPVisible, elementRef: pRef } = checkVisibility();

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.card}>
        <h2>
          {BioTitle}
        </h2>
        <div className={styles.divider} />
        <p
          ref={pRef}
          className={`${isPVisible ? styles.bounceIn : styles.hidden} ${styles.p}`}
        >
          {BioText}
        </p>
      </div>
    </div>
  );
}

export default About;
