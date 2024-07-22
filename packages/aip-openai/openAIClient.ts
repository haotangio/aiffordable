import OpenAI from "openai";

export function createOpenAIClient({apiKey}: {apiKey: string}) {
  return new OpenAI({
    apiKey,
  });
}
