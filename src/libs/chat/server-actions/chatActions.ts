'use server';

import {AIUsageService} from "@aiffordable/tool-manager";
import {ChatgptService} from "@aiffordable/aip-openai";

interface PromptOpt {
  aiName: string;
  model: string;
}

AIUsageService.initialize([
  new ChatgptService({apiKey: process.env.OPENAI_API_KEY as string}),
])

export async function submitPrompt(message: string, opt: PromptOpt): Promise<string> {
  const {content} = await AIUsageService.getInstance().answerPrompt(message, {
    ai: opt.aiName,
    model: opt.model
  });
  return content;
}
