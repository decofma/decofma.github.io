import Image from "next/image";
import layout from "@/styles/layout.module.css"
import Head from "next/head";
import { Menubar } from 'primereact/menubar';
import { useRouter } from "next/router";
import "primereact/resources/themes/lara-dark-purple/theme.css";  
import "primereact/resources/themes/md-dark-deeppurple/theme.css";
import { SelectButton } from 'primereact/selectbutton';
import { useEffect, useState } from "react";

interface LayoutProps {
   children: React.ReactNode;
   selectedLanguage: string;
   setSelectedLanguage: (language: string) => void;
 }

function Navbar({children, selectedLanguage, setSelectedLanguage}: LayoutProps){
   const router = useRouter();
   const options = ['ENG', 'PT'];
   const [value, setValue] = useState(options[0]);

const items = [
   {
      label: "HOME",
      ClassName:"font-bold",
      command: () => router.push("/#homeSection"),
   },
   {

      label: "ABOUT",
      ClassName:"font-bold",
      command: () => router.push("/#aboutSection"),
   },
   {
      label: "TECHS",
      ClassName:"font-bold",
      command: () => router.push("/#techSection"),
   },
   {
      label: "PROJECTS",
      ClassName:"font-bold",
      command: () => router.push("/#projectsSection"),
   },
   {
      label: "CONTACT ME",
      ClassName:"font-bold",
      command: () => router.push("/#contactSection"),
   }
  
 ];
 const end = 
   // <a href="https://github.com/decofma" target="_blank"><Image  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="Github" width={30} height={30} quality={100} /></a>
   <SelectButton value={value} onChange={(e) => { setValue(e.value); setSelectedLanguage(e.value); }} options={options} allowEmpty={false}/>
  
 return (
   <>
      <Head>
         <title>My portfolio</title>
        <meta  name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menubar className={layout.menubar} model={items} end={end}/>
      <main>
         {children}
      </main>
      <footer>

      </footer>
   </>
 );
}
export default Navbar;