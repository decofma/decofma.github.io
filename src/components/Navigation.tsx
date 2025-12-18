"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ui } from "../lib/translations";

export default function Navigation({ lang }: { lang: 'pt' | 'en' }) {
  const t = ui[lang].nav;
  
  const navItems = [
    { id: 'hero', label: t.home, key: '1' },
    { id: 'experience', label: t.history, key: '2' },
    { id: 'projects', label: t.missions, key: '3' },
    { id: 'skills', label: t.skills, key: '4' }
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const item = navItems.find(n => n.key === e.key);
      if (item) document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navItems]);

  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col gap-8 border-l border-white/10 pl-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex flex-col items-start transition-all"
          >
            <span className="text-[10px] text-gray-500 group-hover:text-blue-500">0{item.key}</span>
            <span className="text-xs font-bold tracking-[0.2em] group-hover:text-white text-gray-400 uppercase">
              {item.label}
            </span>
            <motion.div 
              className="h-[1px] bg-blue-500 mt-1"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
            />
          </button>
        ))}
      </div>
    </nav>
  );
}