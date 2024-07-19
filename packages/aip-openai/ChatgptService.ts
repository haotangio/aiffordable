import OpenAI from "openai";

export class ChatgptService implements PromptChatContract {
  private readonly client: OpenAI;
  private readonly modelId: string;

  constructor(client: OpenAI, modelId: string) {
    this.client = client;
    this.modelId = modelId;
  }

  async replyPrompt(prompt: string): Promise<string> {
    return this.client.chat(this.modelId, prompt);
  }

  async replyPromptInThread(prompt: string): Promise<string> {
    return this.client.chat(this.modelId, prompt, {is_thread: true});
  }
}
