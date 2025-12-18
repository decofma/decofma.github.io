import type { Metadata } from "next";
import { GeistMono } from 'geist/font/mono'; // Fonte monoespaçada para o HUD
import "./globals.css";

export const metadata: Metadata = {
  title: "André Ferraz | System HUD",
  description: "Computer Engineer & Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={`${GeistMono.className} bg-[#050505] text-white selection:bg-blue-500/30 overflow-x-hidden`}>
        <div className="fixed inset-0 pointer-events-none z-50 bg-scanlines opacity-[0.03]" />
        {children}
      </body>
    </html>
  );
}