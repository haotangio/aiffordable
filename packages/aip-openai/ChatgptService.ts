import OpenAI from "openai";
import {AIToolName, AIResponse, AIService} from "@aiffordable/ai-resource";
import {createOpenAIClient} from "./openAIClient";

export class ChatgptService implements AIService {
  private client: OpenAI;

  constructor(param: { apiKey: string }) {
    this.client = createOpenAIClient({apiKey: param.apiKey});
  }

  name: AIToolName = "openai";

  async answerPrompt(prompt: string, options: { model: string }): Promise<AIResponse> {
    const response = await this.client.chat.completions.create({
      model: options.model,
      messages: [{role: "user", content: prompt}],
    });

    const content = response.choices[0].message.content as string;
    return {
      content,
    }
  }
}
