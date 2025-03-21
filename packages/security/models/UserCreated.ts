import {User} from "./User";
import {DomainEvent} from "./DomainEvent";

export class UserCreated extends DomainEvent<User> {
  constructor(user: User) {
    super(user);
  }
}
