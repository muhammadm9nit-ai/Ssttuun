
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getGeminiSupportResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: "You are a helpful customer support agent for 'ProGamer Hub', a gaming tournament app. You assist users with technical issues, tournament rules, and account queries in a friendly, concise manner. The primary game supported is Free Fire.",
        temperature: 0.7,
      }
    });
    return response.text || "I'm sorry, I couldn't process that. Please try again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our support team is currently busy. Please try again in a moment.";
  }
};
