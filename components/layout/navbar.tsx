import Image from "next/image";
import layout from "@/styles/layout.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";


interface LayoutProps {
  children: React.ReactNode;
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
}

function Navbar({ children, selectedLanguage, setSelectedLanguage }: LayoutProps) {
  const router = useRouter();
  const options = ['ENG', 'PT'];
  const [language, setLanguage] = useState(selectedLanguage);
  const { theme, toggleTheme } = useTheme();


  const handleNavigation = (sectionId: string) => {
    router.push(sectionId);
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    setSelectedLanguage(newLanguage);
  };

  return (
    <>
      <Head>
        <title>My portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <nav className={layout.navbar}>
        <section onClick={() => handleNavigation("/")} className={layout.navItem}>
          {'{ UNDER DEVELOPMENT }'}
        </section>
        <ul className={layout.navList}>
          
          <li onClick={() => handleNavigation("/#aboutSection")} className={layout.navItem}>
              {language === 'ENG' ? 'ABOUT' : 'SOBRE MIM'}
          </li>
          <li onClick={() => handleNavigation("/#techSection")} className={layout.navItem}>
              {language === 'ENG' ? 'HARD SKILLS' : 'HABILIDADES'}
          </li>
          <li onClick={() => handleNavigation("/#projectsSection")} className={layout.navItem}>
              {language === 'ENG' ? 'PROJECTS' : 'PROJETOS'}
          </li>
          <li onClick={() => handleNavigation("/#contactSection")} className={layout.navItem}>
              {language === 'ENG' ? 'CONTACT ME' : 'FALE COMIGO'}
          </li>
        </ul>
        
        <div className={layout.switchers}>
        <label className={layout.switch}>
          <input
            type="checkbox"
            checked={theme === 'dark'}
              onChange={toggleTheme}
          />
          <span className={layout.slider}>
            <span className={layout.icon}></span>
            <span className={layout.iconMoon}></span>
          </span>
        </label>
          {options.map((option) => (
            <button
              key={option}
              className={`${layout.languageButton} ${language === option ? layout.active : ''}`}
              onClick={() => handleLanguageChange(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </nav>

      <main>
        {children}
      </main>

      <footer></footer>
    </>
  );
}

export default Navbar;
