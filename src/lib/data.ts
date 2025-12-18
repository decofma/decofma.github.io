export const personalData = {
  name: "André Ferraz",
  role: "Software Engineer | Full Stack Developer",
  location: "Rio de Janeiro, Brazil",
  contact: {
    email: "andrem.ferraz@outlook.com",
    linkedin: "in/andreamferraz",
    github: "decofma.github.io",
    linktree: "linktr.ee/Decofma"
  }
};

export const experiences = [
  {
    company: "Petrobras",
    role: { pt: "Engenheiro de Software", en: "Software Engineer" },
    period: "Nov/2024 - Present",
    tech: ["Python", "Machine Learning", "Oracle", "Power BI", "Azure", "LLM"],
    highlights: {
      pt: [
        "Atuação no projeto Cenpes (LOEP/CILEP), desenvolvendo soluções para logística de extração de petróleo.",
        "Desenvolveu modelo de ML que reduziu o processamento de dados meteoceanográficos de 4 min para 10s.",
        "Engenharia full-stack para gestão de incidentes SMS, centralizando dados críticos."
      ],
      en: [
        "Working on Cenpes project (LOEP/CILEP), developing logistics solutions for oil extraction.",
        "Developed ML model slashing meteoceanographic data processing from 4 mins to 10s.",
        "Full-stack engineering for SMS incident management, centralizing critical data."
      ]
    },
    iAndyComment: {
      pt: "De 4 minutos para 10 segundos? O André deu um 'overclock' na logística da Petrobras!",
      en: "From 4 mins to 10 seconds? André basically overclocked Petrobras' logistics!"
    }
  },
  {
    company: "Wilson Sons",
    role: { pt: "Desenvolvedor Full Stack", en: "Full Stack Developer" },
    period: "Sep/2022 - Nov/2024",
    tech: ["AWS", "Next.js", "Python", ".NET", "SAP HCM", "MFA"],
    highlights: {
      pt: [
        "Liderou a recriação do sistema 'Reconheço Você', aumentando o engajamento em 60%.",
        "Desenvolveu features para a Intranet, impactando a comunicação de mais de 3.800 colaboradores.",
        "Implementou MFA e APIs REST integradas ao SAP HCM."
      ],
      en: [
        "Led the rebuild of 'Reconheço Você' system, boosting engagement by 60%.",
        "Developed Intranet features impacting communication for over 3,800 employees.",
        "Implemented MFA and REST APIs integrated with SAP HCM."
      ]
    },
    iAndyComment: {
      pt: "3.800 usuários na Intranet? O André segurou o tráfego da empresa inteira nas costas!",
      en: "3,800 Intranet users? André carried the whole company's traffic on his back!"
    }
  },
  {
    company: "Wilson Sons (Intern)",
    role: { pt: "Estagiário de Desenvolvimento", en: "Software Developer Intern" },
    period: "Sep/2021 - Sep/2022",
    tech: ["AWS", "Python", ".NET", "React", "Git"],
    highlights: {
      pt: [
        "Modernização de ferramentas de RH e gestão de remuneração variável (PLR).",
        "Manutenção de sistemas legados (Front e Back) e uso de AWS.",
        "Colaboração com DevOps para entrega contínua (CI/CD)."
      ],
      en: [
        "Modernization of HR tools and variable compensation management (PLR).",
        "Maintenance of legacy systems (Front/Back) and AWS usage.",
        "Collaboration with DevOps for continuous delivery (CI/CD)."
      ]
    },
    iAndyComment: {
      pt: "Começando do baixo, farmando XP em AWS e garantindo o PLR da galera. O estagiário MVP!",
      en: "Starting from the bottom, farming AWS XP and securing everyone's bonus. The MVP Intern!"
    }
  },
  {
    company: "Gestão de Sucesso",
    role: { pt: "Co-founder & Full Stack", en: "Co-founder & Full Stack" },
    period: "Jan/2018 - Aug/2021",
    tech: ["VTEX IO", "WordPress", "React", "PHP", "E-commerce"],
    highlights: {
      pt: [
        "Liderou o desenvolvimento de mais de 100 lojas virtuais (E-commerce).",
        "Gestão de parcerias estratégicas com VTEX e Loja Integrada.",
        "Consultoria completa desde a concepção até a implementação final."
      ],
      en: [
        "Led end-to-end development of over 100 e-commerce stores.",
        "Managed strategic partnerships with VTEX and Loja Integrada.",
        "Full consulting from conception to final implementation."
      ]
    },
    iAndyComment: {
      pt: "100 lojas entregues? O homem não para! 'Founder Mode' ativado com sucesso.",
      en: "100 stores delivered? The man doesn't stop! 'Founder Mode' successfully activated."
    }
  },
  {
    company: "Bradesco",
    role: { pt: "Estagiário de Projetos", en: "Project Management Intern" },
    period: "Jun/2019 - Aug/2021",
    tech: ["SQL", "Python", "Data Analytics", "Scrum", "Dashboards"],
    highlights: {
      pt: [
        "Criação de dashboards semanais para a diretoria e automação de processos.",
        "Participação na venda de carteiras de clientes (2020/2021).",
        "Monitoramento de projetos estratégicos com TI e conformidade legal."
      ],
      en: [
        "Creation of weekly executive dashboards and process automation.",
        "Participation in customer portfolio sales (2020/2021).",
        "Monitoring of strategic projects with IT and legal compliance."
      ]
    },
    iAndyComment: {
      pt: "André tankou a burocracia bancária e gerou dashboards para a diretoria. Level up em Soft Skills!",
      en: "André tanked bank bureaucracy and generated executive dashboards. Level up in Soft Skills!"
    }
  }
];

export const gameData = {
  projects: [
    {
      id: "p1",
      title: "Kount App",
      type: "Mobile Dev",
      status: "COMPLETED",
      reward: "+20g Protein",
      pt: "Aplicativo para controle de nutrição e contagem de calorias, com interface intuitiva e conversa com assistente de IA integrado para analisar os seus habitos alimentares.",
      en: "App for nutrition control and calorie counting, with an intuitive interface and integrated AI assistant to analyze your eating habits.",
      tech: ["React Native", "TypeScript", "Tailwind", "PostgreSQL", "Supabase", "OpenAI", "GenAI"]
    },
    {
      id: "p2",
      title: "Enigmo",
      type: "Game Dev",
      status: "COMPLETED",
      reward: "Logic XP",
      pt: "Jogo de mistério interativo autoral de detetivismo, onde cada escolha refina o desfecho.",
      en: "Interactive mystery game with original detective logic, where every choice shapes the ending.",
      tech: ["React", "Next.js", "TypeScript", "Tailwind", "Logic", "Storytelling"]
    },
    {
      id: "p3",
      title: "Carrossel Oiapoque",
      type: "Data Viz",
      status: "COMPLETED",
      reward: "UX/UI Mastery",
      pt: "Interface dinâmica em tempo real para plotagem de sondas em relação à plataforma NS-42 com objetivo de atender as regras do IBAMA para a região do Oiapoque.",
      en: "Dynamic real-time interface for plotting rigs relative to the NS-42 platform to comply with IBAMA regulations for the Oiapoque region.",
      tech: ["Rest API", "Next.js", "Leaflet", "Typescript", "Python"]
    },
    {
      id: "p4",
      title: "Cerca Eletronica",
      type: "Data Viz",
      status: "COMPLETED",
      reward: "UX/UI Mastery",
      pt: "Interface dinâmica em tempo real para plotagem de sondas e plataformas com a finalidade de evitar abarroamentos.",
      en: "Dynamic real-time interface for plotting rigs and platforms to avoid collisions.",
      tech: ["Rest API", "Next.js", "Leaflet", "Typescript", "Python"]
    },
    {
      id: "p5",
      title: "Adocat",
      type: "Data Viz",
      status: "COMPLETED",
      reward: "Engineering Degree",
      pt: "Projeto final de curso onde foi desenvolvido um aplicativo para adoção de gatos, visando simplificar a comunicação entre ONGs e futuros adotantes.",
      en: "Final Paper project in which an application for cat adoption was developed to simplify the comunication between ONGs and future adopters.",
      tech: ["Rest API", "React Native", "Next.js", "Tipescript",  "Prisma", "PostgreSQL", "Render","SQLite", "Tailwind", "Python"]
    },
    {
      id: "p6",
      title: "Login Challenge",
      type: "Data Viz",
      status: "COMPLETED",
      reward: "Game Dev XP",
      pt: "Jogo que destaca os impactos negativos de um design ruim, layouts caoticos, interações irritantes e navegação ruim de uma maneira divertida.",
      en: "A game that highlights the negative impacts of bad design, chaotic layouts, irritating interactions and poor navigation in a playful manner.",
      tech: ["React", "TypeScript", "CSS", "Next.js", "Game Design"]
    },
    {
      id: "p7",
      title: "Portfolio iAndy",
      type: "AI Integration",
      status: "ACTIVE",
      reward: "GenAI Spec",
      pt: "Este portfólio. Integração com Gemini API e UI baseada em Games (HUD).",
      en: "This portfolio. Gemini AI integration and Game-based UI (HUD).",
      tech: ["Gemini API", "Next.js 14", "Tailwind"]
    }
  ],
  education: [
    {
      level: "POSTGRAD",
      institution: "PUC-RS",
      major: { pt: "Especialização em Full Stack", en: "Postgrad in Full Stack" },
      year: "Jul 2024 - Jul 2025",
      stats: { int: 99, xp: 80 }
    },
    {
      level: "BACHELOR",
      institution: "UVA",
      major: { pt: "Engenharia de Computação", en: "Computer Engineering" },
      year: "Jan 2016 - Dec 2023",
      stats: { int: 95, xp: 100 }
    }
  ]
};

export const skillTree = [
  {
    category: "Languages & Core",
    items: ["Python", "JavaScript", "TypeScript", "C", "C++", "C#", "SQL"]
  },
  {
    category: "AI & Data Engineering",
    items: ["Machine Learning", "Artificial Intelligence", "LLM", "Databricks", "Microsoft Fabric", "Power BI", "Pandas", "Anaconda"]
  },
  {
    category: "Frontend & Mobile",
    items: ["React", "React Native", "Next.js", "Tailwind CSS", "Angular", "Vue.js", "HTML/CSS"]
  },
  {
    category: "Backend & API",
    items: ["Node.js", "Django", "Flask", "FastAPI", "Express", ".NET", "GraphQL", "REST API", "Prisma"]
  },
  {
    category: "Database",
    items: ["PostgreSQL", "Oracle", "MySQL", "MongoDB", "SQLite", "Firebase"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Azure", "Docker", "Git", "CI/CD"]
  },
  {
    category: "Low Code & Tools",
    items: ["Power Apps", "Power Automate", "Jira", "Trello", "Figma", "Postman", "Swagger"]
  },
  {
    category: "Testing & Security",
    items: ["Jest", "Pytest", "OAuth2", "MFA"]
  }
];

export const languages = [
    { name: "Portuguese", level: "C2 (Native)" },
    { name: "English", level: "C2 (Fluent)" },
    { name: "Spanish", level: "B2 (Intermediate)" },
    { name: "Italian", level: "A2 (Basic)" }
];

export const knowledgeBase = {
  philosophy: {
    coding: {
      pt: "Código bom é código que resolve problema. Não adianta ser bonito se não for performático e útil.",
      en: "Good code is code that solves problems. It's useless if it's pretty but not performant and useful."
    },
    work: {
      pt: "Automação é liberdade. Se você faz a mesma tarefa repetitiva todo dia, existe um script em Python esperando para ser escrito.",
      en: "Automation is freedom. If you do the same repetitive task every day, there's a Python script waiting to be written."
    }
  },
  stories: {
    petrobras_bug: {
      pt: "O desafio dos 4 minutos: O segredo não foi só mudar a linguagem, foi entender que o gargalo estava na forma como os dados eram consultados sequencialmente. Paralelismo salvou o dia.",
      en: "The 4-minute challenge: The secret wasn't just changing the language, but understanding the bottleneck was sequential data fetching. Parallelism saved the day."
    },
    r6_rank: {
      pt: "No Rainbow Six, eu jogava de suporte/IGL. Isso me ensinou mais sobre liderança e comunicação sob pressão do que muita reunião corporativa.",
      en: "In Rainbow Six, I played support/IGL. That taught me more about leadership and communication under pressure than many corporate meetings."
    },
    married_life: {
        pt: "Eu sou casado desde Agosto de 2024, com a mulher que namorei no ensino medio desde os 15 anos. Isso me ensinou sobre compromisso, paciência e parceria. Alem disso me ensinou como as relações mudam e moldam as pessoas ao longo do tempo, cada um amadurecendo individualmente e evoluindo juntos como casal.",
        en: "I have been married since August 2024, to the woman I dated in high school since I was 15. This taught me about commitment, patience, and partnership. It also taught me how relationships change and shape people over time, each maturing individually and evolving together as a couple."
    },
    animals: {
        pt: "Tenho dois gatos, Cristal e Felix. Eles me ensinaram sobre responsabilidade e a importância de cuidar de seres dependentes de nós.",
        en: "I have two cats, Cristal and Felix. They taught me about responsibility and the importance of caring for beings dependent on us."
    },
    tv_shows: {
        pt: "Sou fã de séries como 'The Office' e 'Game of Thrones' e a minha favorita é 'Breaking Bad'. Elas me ensinaram sobre narrativa, desenvolvimento de personagens e a complexidade das relações humanas.",
        en: "I am a fan of series like 'The Office' and 'Game of Thrones' and my favorite is 'Breaking Bad'. They taught me about narrative, character development, and the complexity of human relationships."
    },
    movies: {
        pt: "Eu amo filmes de terror e suspense. 'Corra' é um dos meus favoritos. Eles me ensinaram sobre construção de tensão e a importância do contexto social nas histórias.",
        en: "I love horror and thriller movies. 'Get Out' is one of my favorites. They taught me about building tension and the importance of social context in stories."
    },
    anime: {
        pt: "Anime como 'Attack on Titan' e 'Death Note' me ensinaram sobre temas complexos como moralidade, sacrifício e o impacto das decisões individuais na sociedade.",
        en: "Anime like 'Attack on Titan' and 'Death Note' taught me about complex themes like morality, sacrifice, and the impact of individual decisions on society."
    }
  },
  easterEggs: {
    Capcom: "Você descobriu um segredo! O André adora jogos da saga Resident Evil, sendo Resident Evil 2 o jogo que ele mais gostou.",
    coffee: "Café é o combustível. Sem café, o Python não compila.",
    mechanic: "Mecânica? Ih, rapaz... O André só sabe colocar gasolina e acelerar. Se quebrar, chama o guincho!",
    music: "tá pra existir um ritmo musical que o André não curta. Rock, pop, jazz, clássico, trilha sonora de games... ele ouve tudo!",
  }
};