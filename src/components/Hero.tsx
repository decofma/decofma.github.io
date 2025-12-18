"use client";
import { motion } from "framer-motion";
import { ui } from "../lib/translations";

export default function Hero({ lang }: { lang: 'pt' | 'en' }) {
  const t = ui[lang].hero;

  return (
    <section className="min-h-screen flex flex-col justify-center py-20 font-mono">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-[10px] text-blue-500 mb-4 opacity-50"
      >
        [SYSTEM_BOOT_SEQUENCE_INITIALIZED...]<br />
        [LOADING_CORE_MODULES: OK]<br />
        [LOCAL_TIME: {new Date().toLocaleTimeString()}]
      </motion.div>

      <motion.h1 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-5xl md:text-7xl font-black italic tracking-tighter mb-4"
      >
        ANDRÉ FERRAZ
      </motion.h1>

      <motion.div 
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-blue-600 text-black font-bold px-4 py-2 inline-block w-fit mb-8 skew-x-[-12deg]"
      >
        {t.role}
      </motion.div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="max-w-xl text-gray-400 text-sm leading-relaxed border-l-2 border-blue-500/30 pl-6"
      >
        {t.description}
      </motion.p>

      <div className="flex gap-10 mt-12 border-t border-white/5 pt-8">
        <StatItem label={t.stats.hp} value="100/100" color="bg-green-500" />
        <StatItem label={t.stats.int} value="99" color="bg-blue-500" />
        <StatItem label={t.stats.xp} value="2.5" color="bg-purple-500" />
      </div>
    </section>
  );
}

function StatItem({ label, value, color }: { label: string, value: string, color: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[10px] text-gray-500 font-bold">{label}</span>
      <span className={`text-xs font-bold ${color.replace('bg-', 'text-')}`}>{value}</span>
      <div className="w-16 h-1 bg-gray-800">
        <div className={`h-full ${color} w-full`} />
      </div>
    </div>
  );
}