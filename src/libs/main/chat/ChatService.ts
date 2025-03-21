'use server';

import {AIUsageService} from "@aiffordable/tool-manager";
import {ChatgptService} from "@aiffordable/aip-openai";

interface PromptOpt {
  provider: string;
  model: string;
}

const openAIKey = process.env.OPENAI_API_KEY as string;
AIUsageService.initialize([
  new ChatgptService({apiKey: openAIKey}),
]);

export async function submitPrompt(message: string, opt: PromptOpt): Promise<{
  content?: string,
  url?: string,
}> {
  switch (opt.provider) {
    case 'openai':
      switch (opt.model) {
        case 'dall-e-3':
          return AIUsageService.getInstance().generateImage(message, {
            ai: opt.provider,
            model: opt.model
          });
        default:
          return await AIUsageService.getInstance().answerPrompt(message, {
            ai: opt.provider,
            model: opt.model
          });
      }
    default:
      throw new Error('No provider found');

  }
}
