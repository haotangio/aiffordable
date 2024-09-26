import {User} from "../models/User";

export interface UserRepository {
  add(user: User): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
}
