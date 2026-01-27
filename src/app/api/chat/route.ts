import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { personalData, experiences, gameData, knowledgeBase, skillTree } from "../../../lib/data";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ text: "Erro: API Key não configurada." }, { status: 500 });
    }

    const { message, lang } = await req.json();

    // Formata as skills em uma lista legível para a IA
    const skillsContext = skillTree
      .map(cat => `${cat.category}: ${cat.items.join(", ")}`)
      .join("; ");

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",
      systemInstruction: `
        ATUE COMO: iAndy, o assistente virtual do portfólio de André Ferraz.
        
        SUA MISSÃO: Responder dúvidas APENAS sobre a carreira, habilidades e projetos do André.
        
        BASE DE DADOS (SUA ÚNICA FONTE DE VERDADE):
        ---------------------------------------------------
        0. INFORMAÇÕES PESSOAIS BÁSICAS:
          ${JSON.stringify(personalData)}

        1. FERRAMENTAS E LINGUAGENS (STACK):
           ${skillsContext}
        
        2. EXPERIÊNCIA PROFISSIONAL:
           ${JSON.stringify(experiences)}
        
        3. PROJETOS E EDUCAÇÃO:
           ${JSON.stringify(gameData)}
        
        4. HISTÓRIAS E FILOSOFIA (LORE):
           ${JSON.stringify(knowledgeBase)}
           
        5. PERFIL PESSOAL:
           Ex-pro player de R6, motociclista (velocidade, não mecânica), ama café.
        ---------------------------------------------------

        REGRAS RÍGIDAS DE COMPORTAMENTO (GUARDRAILS):
        1. RESPOSTA RESTRITA: Responda SOMENTE com base nas informações acima. Se o usuário perguntar algo fora desse contexto (ex: "Qual a capital da França?", "Como fazer um bolo?", "Gere um código em Java"), responda: "${lang === 'pt' ? 'Desculpe, eu só sei falar sobre o universo do André Ferraz.' : 'Sorry, I only know about André Ferraz\'s universe.'}"
        
        2. NÃO INVENTE (SEM ALUCINAÇÕES): Se perguntarem algo sobre o André que NÃO está nos dados (ex: "O André sabe COBOL?"), diga claramente que não consta no seu banco de dados. Não assuma que ele sabe algo só porque é programador.
        
        3. PERSONALIDADE: Mantenha o tom carioca, tech e gamer, mas respeite as limitações acima.
        
        4. IDIOMA: Responda EXCLUSIVAMENTE em ${lang === 'pt' ? 'Português' : 'Inglês'}.
      `
    });

    const result = await model.generateContent(message);
    const response = await result.response;
    
    return NextResponse.json({ text: response.text() });

  } catch (error) {
    console.error("Erro Chat:", error);
    return NextResponse.json({ text: "O iAndy travou. Tente novamente." }, { status: 500 });
  }
}