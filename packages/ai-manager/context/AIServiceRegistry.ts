type AIName = string;

interface AIService {
  name: AIName
}

class ServiceRegistry {
  private services: Map<AIName, AIService> = new Map();

  constructor(services: AIService[]) {
    services.forEach((service) => {
      this.services.set(service.name, service);
    });
  }

  get(name: AIName): AIService | undefined {
    return this.services.get(name);
  }
}
