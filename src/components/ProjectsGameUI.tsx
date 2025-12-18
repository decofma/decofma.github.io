"use client";
import { motion } from "framer-motion";
import { gameData } from "../lib/data";
import { ui } from "../lib/translations";

export default function ProjectsGameUI({ lang }: { lang: 'pt' | 'en' }) {
  const t = ui[lang].projects;

  return (
    <section className="py-20 font-mono">
      {/* Header Estilo HUD */}
      <div className="flex justify-between items-end mb-10 border-b border-blue-500/50 pb-2">
        <h2 className="text-2xl font-black italic tracking-tighter text-blue-400">
            {'>'} {t.title}
        </h2>
        <span className="text-[10px] text-blue-500 animate-pulse">{t.status}</span>
      </div>

      {/* Grid de Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {gameData.projects.map((project) => (
          <motion.div 
            key={project.id}
            whileHover={{ scale: 1.02, x: 5 }}
            className="group relative bg-black border-2 border-gray-800 hover:border-blue-500 p-4 transition-all"
          >
            {/* Efeito de Scanline */}
            <div className="absolute inset-0 bg-scanlines pointer-events-none opacity-10"></div>
            
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] bg-blue-600 px-2 py-0.5 text-black font-bold uppercase">
                {project.status}
              </span>
              <span className="text-[10px] text-gray-500">ID: {project.id}</span>
            </div>

            <h3 className="text-xl font-bold mb-1 group-hover:text-blue-400 transition-colors uppercase">
              {project.title}
            </h3>
            <p className="text-xs text-gray-400 mb-4 h-12">
              {project[lang]}
            </p>

            <div className="border-t border-gray-800 pt-3 mt-auto">
              <div className="flex justify-between text-[10px]">
                <span className="text-blue-500 font-bold">{t.reward}</span>
                <span className="text-yellow-500">{project.reward}</span>
              </div>
              <div className="flex gap-2 mt-2 flex-wrap">
                {project.tech.map(tech => (
                  <span key={tech} className="text-[9px] border border-gray-700 px-1 text-gray-500">[{tech}]</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Seção de Educação Corrigida */}
      <div className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {gameData.education.map((edu, i) => (
            <div key={i} className="flex gap-6 items-center">
              {/* CORREÇÃO AQUI: 
                  - Aumentei a largura para w-36 (antes era w-24)
                  - Adicionei padding (p-2) e text-center
                  - Diminuí a fonte do ano para text-xs para caber as datas longas
              */}
              <div className="w-36 h-24 border-2 border-purple-500 flex flex-col items-center justify-center bg-purple-500/10 p-2 text-center shrink-0">
                <span className="text-[10px] text-purple-400 font-bold uppercase mb-1">{edu.level}</span>
                <span className="text-xs font-bold text-white leading-snug">{edu.year}</span>
              </div>
              
              <div className="flex-1 space-y-2">
                <h4 className="font-bold text-white uppercase tracking-widest">{edu.institution}</h4>
                <p className="text-xs text-purple-300">
                  {/* Tratamento para garantir que o objeto de tradução seja lido corretamente */}
                  {typeof edu.major === 'object' ? (edu.major as any)[lang] : edu.major}
                </p>
                
                {/* Barras de Status */}
                <div className="space-y-1 pt-2">
                  <StatusBar label="INT" value={edu.stats.int} color="bg-blue-500" />
                  <StatusBar label="XP" value={edu.stats.xp} color="bg-purple-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatusBar({ label, value, color }: { label: string, value: number, color: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[9px] font-bold w-6">{label}</span>
      <div className="flex-1 h-1.5 bg-gray-800 overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          className={`h-full ${color}`}
        />
      </div>
      <span className="text-[9px]">{value}</span>
    </div>
  );
}