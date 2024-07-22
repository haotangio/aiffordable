import {AIToolName, AIService} from "@aiffordable/ai-resource";
import {ImageGenerationContract, PromptChatContract, PromptOptions} from "../contracts";

export class AIUsageService implements PromptChatContract, ImageGenerationContract {
  private aiServices: Map<AIToolName, AIService> = new Map();
  private static singletonInstance: AIUsageService;

  constructor(services: AIService[]) {
    services.forEach((service) => {
      this.aiServices.set(service.name, service);
    });
  }

  static initialize(services: AIService[]) {
    this.singletonInstance = new AIUsageService(services);
  }

  static getInstance() {
    return this.singletonInstance;
  }

  private aiServiceOfName(name: AIToolName): AIService {
    const service = this.aiServices.get(name);
    if (!service) {
      throw new Error(`AI service ${name} not found`);
    }

    return service;
  }

  answerPrompt(prompt: string, opts: PromptOptions) {
    const aiService = this.aiServiceOfName(opts.ai);
    return aiService.answerPrompt(prompt, {model: opts.model});
  }

  generateImage(prompt: string, opts: PromptOptions) {
    const aiService = this.aiServiceOfName('openai');
    return aiService.generateImage(prompt, {model: opts.model});
  }
}
