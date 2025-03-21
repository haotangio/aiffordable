import {AIModelName, AIToolName, AIResponse} from "../../ai-access";

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
  generateImage: (prompt: string, opts: PromptOptions) => Promise<AIResponse>;
}
