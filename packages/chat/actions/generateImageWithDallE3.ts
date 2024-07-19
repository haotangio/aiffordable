'use server';
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const MODEL = "dall-e-3";

export async function generateImageWithDallE3({message}: {message: string}): Promise<string> {
  const response = await openai.images.generate({
    model: MODEL,
    prompt: message,
    n: 1,
    size: "1024x1024",
  });

  console.log(response.data[0]);

  return response.data[0].url as string;
}
