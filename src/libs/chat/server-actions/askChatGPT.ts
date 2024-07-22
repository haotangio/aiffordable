'use server';
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// const MODEL = 'gpt-4o';
const MODEL = 'gpt-3.5-turbo';

export async function askChatGPT({message}: {message: string}): Promise<string> {
  const response = await openai.chat.completions.create({
    model: MODEL,
    messages: [{role: "user", content: message}],
  });

  return response.choices[0].message.content as string;
}
