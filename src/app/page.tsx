"use client";
import { useState } from "react";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Experience from "../components/Experience";
import ProjectsGameUI from "../components/ProjectsGameUI";
import SkillTree from "../components/SkillTree";
import ChatAssistant from "../components/ChatAssistant";
import LangToggle from "../components/LangToggle";
import { ui } from "../lib/translations";

export default function Home() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const t = ui[lang].footer;

  return (
    <main className="relative min-h-screen">
      <div className="bg-scanlines" />
      <LangToggle lang={lang} setLang={setLang} />
      <Navigation lang={lang} />

      <div className="max-w-4xl mx-auto px-6 lg:px-0">
        <section id="hero">
          <Hero lang={lang} />
        </section>

        <section id="experience">
          <Experience lang={lang} />
        </section>

        <section id="projects">
          <ProjectsGameUI lang={lang} />
        </section>

        <section id="skills">
          <SkillTree lang={lang} />
        </section>
        
        <footer className="py-10 border-t border-white/5 text-[10px] text-gray-600 flex justify-between font-mono">
          <span>{t.system} ANDRE_FERRAZ_v2.5</span>
          <span>{t.location} RIO_DE_JANEIRO</span>
          <span>{t.sync} {new Date().toLocaleDateString()}</span>
        </footer>
      </div>

      <ChatAssistant lang={lang} />
    </main>
  );
}