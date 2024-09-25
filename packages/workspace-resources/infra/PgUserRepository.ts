import {User} from "../models/User";
import {UserRepository} from "../models/UserRepository";
import {testKysely} from "./db/kysely";

export class PgUserRepository implements UserRepository {
  constructor() {

  }

  save(user: User) {
    testKysely();
    return user;
  }

  findByEmail(email: string): Promise<User | null> {
    return Promise.resolve(null);
    // return Promise.resolve(new User(email, 'password', 'user'));
  }
}
