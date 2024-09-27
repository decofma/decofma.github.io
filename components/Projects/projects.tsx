import Image  from 'next/image';
import styles from '@/styles/Projects.module.css';      
import {C} from '@/util/constants';

type HomeProps = {
    selectedLanguage: 'ENG' | 'PT';
  };

function redirectToSite(site: string): void {
  window.open(site, '_blank');
}

function Projects({ selectedLanguage }: HomeProps) {
  const ProjectTitle = selectedLanguage === 'ENG' ? C.EngProjectTitle : C.PortProjectTitle;
  const AdocatText = selectedLanguage === 'ENG' ? C.EngProjectAdocat : C.PortProjectAdocat;
  const ChatBotText = selectedLanguage === 'ENG' ? C.EngProjectChatbot : C.PortProjectChatbot;
  const TicTacToeText = selectedLanguage === 'ENG' ? C.EngProjectVelha : C.PortProjectVelha;
  const TicTacToeTitle = selectedLanguage === 'ENG' ? C.EngTicTacTitle : C.PortTicTacTitle;
  const ChatText = selectedLanguage === 'ENG' ? C.EngProjectCha : C.PortProjectCha

 return(
    <>
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
                <Image className={styles.projectImage} src="/chatbot-mobile.png" alt="chatbot mockup" width={400} height={400} quality={100} />
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
                <p className={styles.projectText}> {ChatText} </p>
              </div>
            </div>            
                                    
          </div>
        </div>
    </>
 )
}
export default Projects