export type AIToolName = string;
export type AIModelName = string;

export interface AIResponse {
  url?: string;
  content: string;
}

export interface AIService {
  name: AIToolName;

  answerPrompt(prompt: string, options: { model: string }): Promise<AIResponse>;
}
