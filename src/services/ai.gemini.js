import { GoogleGenerativeAI } from "@google/generative-ai";
import 'dotenv/config';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);

async function generateResponse(promt){
  try {
    const model = genAI.getGenerativeModel({ 
      model : "gemini-2.5-flash" ,
      systemInstruction: "You are a highly skilled code review expert. Your task is to analyze the provided code for potential issues, suggest improvements, and ensure best practices are followed. Provide detailed feedback on code structure, readability, performance, and maintainability. use emojis to make the response more engaging and friendly. and give space between the lines to make it more readable.",
    });
    const result = await model.generateContent(promt);
    const response = await result.response ;
    const text = await response.text(); 
    return text;
  } catch (error) {
    console.error("Error generating response:", error);
    throw error;
    
  }
}

export default generateResponse