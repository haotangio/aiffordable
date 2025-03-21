export class DomainEventPublisher {
  public static instance(): DomainEventPublisher {
    return new DomainEventPublisher();
  };

  public publish<T>(event: T): void {
    console.log(event);
  }
}
