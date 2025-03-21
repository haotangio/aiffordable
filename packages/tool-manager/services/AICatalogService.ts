import {AIToolName, AIService} from "../../ai-access";
import {ToolListingContract,} from "@aiffordable/tool-manager";

export class AICatalogService implements ToolListingContract {
  private aiServices: Map<AIToolName, AIService> = new Map();

  constructor(services: AIService[]) {
    services.forEach((service) => {
      this.aiServices.set(service.name, service);
    });
  }

  getTools(): AIToolName[] {
    return Array.from(this.aiServices.values()).map((service) => service.name);
  }
}
