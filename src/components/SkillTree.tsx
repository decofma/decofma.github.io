"use client";
import { motion } from "framer-motion";
import { skillTree, languages } from "../lib/data";
import { ui } from "../lib/translations";
import { 
  Code2, 
  BrainCircuit, 
  Smartphone, 
  Server, 
  Database, 
  Cloud, 
  Wrench, 
  ShieldCheck 
} from "lucide-react";

// Mapeamento de ícones por categoria
const categoryIcons: any = {
  "Languages & Core": Code2,
  "AI & Data Engineering": BrainCircuit,
  "Frontend & Mobile": Smartphone,
  "Backend & API": Server,
  "Database": Database,
  "Cloud & DevOps": Cloud,
  "Low Code & Tools": Wrench,
  "Testing & Security": ShieldCheck
};

export default function SkillTree({ lang }: { lang: 'pt' | 'en' }) {
  const t = ui[lang].skills;

  return (
    <section className="py-20 font-mono text-white">
      {/* Cabeçalho */}
      <div className="flex items-center gap-4 mb-12">
        <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-purple-500/50"></div>
        <h2 className="text-2xl font-black italic text-purple-400 tracking-widest uppercase">
          {t.title}
        </h2>
        <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-purple-500/50"></div>
      </div>

      {/* Grid de Skills por Categoria */}
      <div className="space-y-12">
        {skillTree.map((cat, idx) => {
          const Icon = categoryIcons[cat.category] || Code2;
          
          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-blue-400 font-bold mb-4 text-sm flex items-center gap-2 uppercase tracking-wider border-b border-blue-500/20 pb-2 w-fit">
                <Icon size={16} />
                {cat.category}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {cat.items.map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(168, 85, 247, 0.2)" }}
                    className="
                      relative group flex flex-col items-center justify-center 
                      bg-purple-500/10 border border-purple-500/30 
                      p-3 rounded-xl cursor-default transition-all duration-300
                      hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]
                    "
                  >
                    {/* Efeito de brilho no hover */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl pointer-events-none" />
                    
                    {/* Nome da Skill */}
                    <span className="text-xs font-bold text-gray-300 group-hover:text-white text-center">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Seção de Idiomas */}
      <div className="mt-16 p-6 border border-blue-500/30 bg-blue-900/10 rounded-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-scanlines opacity-5 pointer-events-none" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <span className="text-blue-400 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            {t.comms}
          </span>
          
          <div className="flex flex-wrap justify-center gap-8">
            {languages.map((langItem) => (
              <div key={langItem.name} className="flex items-center gap-3">
                <div className="flex flex-col items-center">
                  <span className="text-sm font-bold text-white">{langItem.name}</span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider">{langItem.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}