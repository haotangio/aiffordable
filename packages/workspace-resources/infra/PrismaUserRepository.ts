import {User} from "../models/User";
import {UserRepository} from "../models/UserRepository";

export class PrismaUserRepository implements UserRepository {
  save(user: any) {
    return user;
  }

  findByEmail(email: string): Promise<User | null> {
    return Promise.resolve(new User(email, 'password', 'user'));
  }
}
