"use client";
export default function LangToggle({ lang, setLang }: { lang: 'pt' | 'en', setLang: any }) {
  return (
    <div className="fixed top-6 right-6 z-50 flex gap-2 bg-black/50 p-1 rounded-full border border-white/10 backdrop-blur-md">
      <button 
        onClick={() => setLang('pt')}
        className={`px-3 py-1 rounded-full text-xs font-bold transition ${lang === 'pt' ? 'bg-blue-600 text-white' : 'text-gray-400'}`}
      >PT</button>
      <button 
        onClick={() => setLang('en')}
        className={`px-3 py-1 rounded-full text-xs font-bold transition ${lang === 'en' ? 'bg-blue-600 text-white' : 'text-gray-400'}`}
      >EN</button>
    </div>
  );
}