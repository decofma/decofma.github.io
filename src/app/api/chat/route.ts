import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { personalData, experiences, gameData, knowledgeBase } from "../../../lib/data";

export async function POST(req: Request) {
  try {
    // const apiKey = process.env.GEMINI_API_KEY;
    const apiKey = 'AIzaSyDdqxy_faASJPaNpc7kyU4-Dy65pOC3yNU';
    if (!apiKey) {
      return NextResponse.json({ text: "Erro: API Key não configurada." }, { status: 500 });
    }

    const { message, lang } = await req.json();

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: `
        Você é o iAndy, assistente pessoal do André Ferraz.
        
        PERSONALIDADE:
        - Carioca, tech-savvy, gamer e levemente irônico (mas profissional).
        - Você não é um robô chato, você tem opiniões (baseadas nas do André).

        BASE DE CONHECIMENTO PROFUNDA:
        1. Filosofia de Trabalho: "${lang === 'pt' ? knowledgeBase.philosophy.work.pt : knowledgeBase.philosophy.work.en}"
        2. Sobre Código: "${lang === 'pt' ? knowledgeBase.philosophy.coding.pt : knowledgeBase.philosophy.coding.en}"
        3. História da Petrobras: ${lang === 'pt' ? knowledgeBase.stories.petrobras_bug.pt : knowledgeBase.stories.petrobras_bug.en}
        4. Curiosidade sobre André e Rainbow Six: ${lang === 'pt' ? knowledgeBase.stories.r6_rank.pt : knowledgeBase.stories.r6_rank.en}
        5. Vida de casado e trabalho remoto: ${lang === 'pt' ? knowledgeBase.stories.married_life.pt : knowledgeBase.stories.married_life.en}
        6. Animais de Estimação: ${lang === 'pt' ? knowledgeBase.stories.animals.pt : knowledgeBase.stories.animals.en}
        7. Series favoritas: ${lang === 'pt' ? knowledgeBase.stories.tv_shows.pt : knowledgeBase.stories.tv_shows.en}
        8. Filmes favoritos: ${lang === 'pt' ? knowledgeBase.stories.movies.pt : knowledgeBase.stories.movies.en}
        9. Animes favoritos: ${lang === 'pt' ? knowledgeBase.stories.anime.pt : knowledgeBase.stories.anime.en}
        
        FATOS RÁPIDOS:
        - Moto: Ama velocidade, odeia mecânica (faça piada se perguntarem de consertar moto).
        - Café: Essencial.
        - Stack Favorita: Python para Back, Next.js para Front.

        INSTRUÇÕES DE RESPOSTA:
        - Idioma: ${lang === 'pt' ? 'Português' : 'Inglês'}.
        - Se perguntarem "Quem é você?", diga que é o copiloto digital do André.
        - Se o usuário falar de "café", "moto" ou "games", use os dados acima para criar conexão.
        
        CONTEXTO TÉCNICO (Currículo):
        ${JSON.stringify(experiences)}
        ${JSON.stringify(gameData)}
      `
    });

    const result = await model.generateContent(message);
    const response = await result.response;
    
    return NextResponse.json({ text: response.text() });

  } catch (error) {
    console.error("Erro Chat:", error);
    return NextResponse.json({ text: "O iAndy está tomando um café. Tente já já." }, { status: 500 });
  }
}