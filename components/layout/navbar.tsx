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
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (sectionId: string) => {
    router.push(sectionId);
    setMenuOpen(false); // Fecha o menu ao clicar em um item
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    setSelectedLanguage(newLanguage);
  };

  return (
    <div>
      <Head>
        <title>My portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={`${layout.navbar} ${theme === 'dark' ? layout.lightNavbar : layout.darkNavbar}`}>
        <section onClick={() => handleNavigation("/")} className={layout.navItem}>
          {'{ ANDRÉ FERRAZ }'}
        </section>

        {/* Hamburger Menu */}
        <div
          className={`${layout.hamburger} ${menuOpen ? layout.active : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div />
          <div />
          <div />
        </div>

        <ul className={`${layout.navList} ${menuOpen ? layout.active : ''}`}>
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

          {/* Switchers de tema e idioma dentro do menu mobile */}
          <div className={layout.mobileSwitchers}>
            {/* Tema (Switch) */}
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

            {/* Idioma (Botões) */}
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
        </ul>
      </nav>

      <main>{children}</main>

      <footer></footer>
    </div>
  );
}

export default Navbar;
