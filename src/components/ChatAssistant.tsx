"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ui } from "../lib/translations";

export default function ChatAssistant({ lang }: { lang: 'pt' | 'en' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const t = ui[lang].chat;
  const [messages, setMessages] = useState<{ role: string, text: string }[]>([]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ role: "ai", text: t.welcome }]);
    }
  }, [t.welcome, messages.length]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg, lang }),
      });

      if (!res.ok) throw new Error("Falha na resposta da API");

      const data = await res.json();
      setMessages((prev) => [...prev, { role: "ai", text: data.text }]);
    } catch (error) {
      console.error("Erro no chat:", error);
      setMessages((prev) => [...prev, { role: "ai", text: lang === 'pt' ? "Erro de conexão. Tente novamente." : "Connection error. Try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }} // Animação fluida aqui
            className="bg-black/90 backdrop-blur-xl border border-blue-500/30 w-80 h-96 rounded-2xl flex flex-col shadow-2xl overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="p-3 bg-blue-600/20 border-b border-blue-500/30 flex justify-between items-center">
              <span className="text-blue-100 font-bold text-xs flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
                {t.title}
              </span>
              <button onClick={() => setIsOpen(false)} className="text-blue-300 hover:text-white text-xs">✕</button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm scrollbar-thin">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <span className={`inline-block px-3 py-2 rounded-lg max-w-[85%] text-xs leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : 'bg-white/10 text-gray-200 border border-white/5 rounded-bl-none'
                  }`}>
                    {m.text}
                  </span>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <span className="bg-white/5 px-3 py-2 rounded-lg text-xs text-gray-400 animate-pulse">
                    iAndy digitando...
                  </span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 border-t border-white/10 flex gap-2 bg-black/50">
              <input 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder={t.placeholder}
                disabled={isLoading}
                className="flex-1 bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white text-xs outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
              />
              <button 
                onClick={sendMessage} 
                disabled={isLoading}
                className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded-md text-xs font-bold transition-colors disabled:opacity-50"
              >
                ➤
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-lg shadow-blue-500/20 border transition-all ${
          isOpen 
            ? 'bg-red-500/20 border-red-500 text-red-500 rotate-90' 
            : 'bg-blue-600 border-blue-400 text-white'
        }`}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        )}
      </motion.button>
    </div>
  );
}