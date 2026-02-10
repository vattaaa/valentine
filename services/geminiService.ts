
import { GoogleGenAI, Type } from "@google/genai";
import { LoveStoryConfig } from "../types";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateLoveContent = async (config: LoveStoryConfig) => {
  const ai = getAI();
  const prompt = `
    Create a deeply romantic and formal Valentine's Day package for an LDR couple in English. 
    
    Partner Name: ${config.partnerName}
    Sender Name: ${config.yourName}
    Relationship Duration: ${config.relationshipDuration}
    Favorite Memory: ${config.favoriteMemory}
    LDR Distance: ${config.ldrDistance}
    Pet Name used by Sender: "${config.petNames}"

    Context: Their communication is strictly through WhatsApp, Instagram, TikTok, mobile games, iMessage, and FaceTime. Mention these specific digital bridges that keep them connected.

    Instructions:
    1. Write a short, beautiful, and poetic verse about long-distance love and digital connection.
    2. Write a heartfelt, elegant love letter (approx 200 words). It should feel sophisticated and deeply moving. Mention how those specific apps are the only windows they have to see each other.
    3. Create a detailed prompt for an AI image generator to visualize their love—perhaps two people in different cities connected by a glowing digital thread under a starry sky.

    IMPORTANT: Use formal, poetic, and high-quality English. No slang.
    Return as JSON.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          poem: { type: Type.STRING },
          letter: { type: Type.STRING },
          imagePrompt: { type: Type.STRING },
        },
        required: ["poem", "letter", "imagePrompt"]
      }
    }
  });

  return JSON.parse(response.text);
};

export const generateLoveImage = async (prompt: string) => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        { text: `A breathtaking, cinematic, masterwork romantic digital art piece. Style: ethereal, glowing, soft focus, sophisticated, high detail. Theme: ${prompt}` }
      ]
    },
    config: {
      imageConfig: {
        aspectRatio: "1:1"
      }
    }
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
};
