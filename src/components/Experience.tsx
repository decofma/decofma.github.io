"use client";
import { motion } from "framer-motion";
import { experiences } from "../lib/data";
import { ui } from "../lib/translations";

export default function Experience({ lang }: { lang: 'pt' | 'en' }) {
  const t = ui[lang].experience;

  return (
    <section className="py-20" id="experience">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
      >
        {t.title}
      </motion.h2>

      <div className="space-y-12 border-l border-blue-500/30 ml-4 pl-8">
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-blue-500/50 transition-colors"
          >
            <div className="absolute -left-[41px] top-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-[#050505]" />
            
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-blue-400">{exp.company}</h3>
                <p className="text-gray-300 font-medium">{exp.role[lang]}</p>
              </div>
              <span className="text-sm text-gray-500 mt-2 md:mt-0">{exp.period}</span>
            </div>

            <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm mb-4">
              {exp.highlights[lang].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-6">
              {exp.tech.map(t => (
                <span key={t} className="px-2 py-1 bg-blue-500/10 text-blue-300 text-[10px] rounded uppercase tracking-widest border border-blue-500/20">
                  {t}
                </span>
              ))}
            </div>

            <div className="bg-purple-500/10 border border-purple-500/20 p-3 rounded-lg italic text-xs text-purple-200">
              <span className="font-bold text-purple-400">{t.iAndyTag}</span>
              "{exp.iAndyComment[lang]}"
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}