import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { useTheme } from "@/context/ThemeContext";
import layout from "@/styles/layout.module.css";

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
  const [isOpen, setIsOpen] = useState(false); // Controle do menu hambúrguer

  const handleNavigation = (sectionId: string) => {
    setIsOpen(false); // Fecha o menu ao navegar
    router.push(sectionId);
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    setSelectedLanguage(newLanguage);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Head>
        <title>My portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={`${layout.navbar} ${theme === 'dark' ? layout.darkNavbar : layout.lightNavbar}`}>
        <section onClick={() => handleNavigation("/")} className={layout.navItem}>
          {'{ ANDRÉ FERRAZ }'}
        </section>

        <div className={layout.hamburger} onClick={toggleMenu}>
          <span className={`${layout.line} ${isOpen ? layout.open : ''}`}></span>
          <span className={`${layout.line} ${isOpen ? layout.open : ''}`}></span>
          <span className={`${layout.line} ${isOpen ? layout.open : ''}`}></span>
        </div>

        <ul className={`${layout.navList} ${isOpen ? layout.showMenu : ''} ${theme === 'dark' ? layout.darkNavbar : layout.lightNavbar}`}>
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

        <div className={`${layout.switcherContainer} ${isOpen ? layout.showMenu : ''}`}>
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
              className={`${layout.languageButton} ${language === option ? layout.languageButtonActive : ''}`}
              onClick={() => handleLanguageChange(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </nav>

      <main>{children}</main>

      <footer></footer>
    </div>
  );
}

export default Navbar;
