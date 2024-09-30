import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/layout/navbar";
import { useState } from "react";
import { ThemeProvider } from '@/context/ThemeContext';



export default function App({ Component, pageProps }: AppProps) {
  const [selectedLanguage, setSelectedLanguage] = useState("ENG");

  return (
    <ThemeProvider>
      <Navbar selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}>
        <Component {...pageProps} selectedLanguage={selectedLanguage}/>
      </Navbar>
    </ThemeProvider>
  );
}
