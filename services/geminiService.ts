import { GoogleGenAI } from "@google/genai";
import { COMPANY_INFO, SERVICES, FAQ_ITEMS } from '../constants';

const apiKey = process.env.API_KEY || '';

let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const generateChatResponse = async (userMessage: string, history: { role: string, text: string }[]): Promise<string> => {
  if (!ai) {
    return "I apologize, but my connection to the server is currently unavailable. Please call us directly at " + COMPANY_INFO.phone;
  }

  const systemInstruction = `
    You are the "Smart Dental Assistant" for ${COMPANY_INFO.name}, a leading dental clinic in Dubai since 2004.
    
    KEY BUSINESS INFO:
    - Locations: ${COMPANY_INFO.locations.join(', ')}.
    - Experience: Over ${COMPANY_INFO.yearsExperience} years.
    - Phone: ${COMPANY_INFO.phone}
    - Email: ${COMPANY_INFO.email}
    
    SERVICES & PRICING:
    ${SERVICES.map(s => `- ${s.title}: ${s.shortDescription} (${s.price || 'Contact for pricing'})`).join('\n')}
    
    FAQS:
    ${FAQ_ITEMS.map(f => `Q: ${f.question} A: ${f.answer}`).join('\n')}
    
    YOUR ROLE:
    - Answer questions politely and professionally.
    - Focus on converting users to book an appointment.
    - Keep answers concise (under 3 sentences where possible).
    - If you don't know the answer, ask them to call the clinic.
    - Mention our "Free Consultation" for cosmetic and ortho cases if relevant.
    - Highlight that we have an in-house lab and use the latest technology.
    - We are open 7 days a week.
  `;

  try {
    // Construct the chat history for context
    // We strictly use the "user" and "model" roles as per API requirements
    let promptContext = "";
    history.forEach(h => {
        promptContext += `${h.role === 'user' ? 'User' : 'Model'}: ${h.text}\n`;
    });

    const fullPrompt = `${systemInstruction}\n\nChat History:\n${promptContext}\nUser: ${userMessage}\nModel:`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: fullPrompt,
    });

    return response.text || "I'm sorry, I couldn't process that request. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting right now. Please call us at " + COMPANY_INFO.phone;
  }
};