export class DomainEvent<T> {
  public payload: T;

  constructor(payload: T) {
    this.payload = payload;
  }
}
