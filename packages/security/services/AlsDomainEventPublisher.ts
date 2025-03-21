import {AsyncLocalStorage} from 'node:async_hooks';
import {DomainEvent} from "../models/DomainEvent";

const ALS_KEY = 'event_publisher';

export class AlsDomainEventPublisher {

  public static instance() {
    const store = new AsyncLocalStorage();
    return store.getStore();
  };

  publish(event: DomainEvent<unknown>) {
    console.log('publishing domain event');
  }
}
