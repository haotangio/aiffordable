import {AIModelName, AIToolName, AIResponse} from "@aiffordable/ai-resource";

export interface PromptOptions {
  ai: AIToolName,
  model: AIModelName,
}

export interface ToolListingContract {
  getTools: () => AIToolName[];
}

export interface PromptChatContract {
  answerPrompt: (prompt: string, opts: PromptOptions) => Promise<AIResponse>;
}

export interface ImageGenerationContract {
  generateImage: (prompt: string) => Promise<string | Blob>;
}
