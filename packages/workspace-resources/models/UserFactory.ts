import {User} from "./User";
import {UserRepository} from "./UserRepository";
import {PasswordHasher} from "../models/PasswordHasher";

export class UserFactory {
  private userRepository: UserRepository;
  private passwordHasher: PasswordHasher;

  constructor(userRepository: UserRepository, passwordHasher: PasswordHasher) {
    this.userRepository = userRepository;
    this.passwordHasher = passwordHasher;
  }

  async buildAdminUser(email: string, password: string): Promise<User> {
    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new Error('User already exists');
    }

    return User.newAdmin(email, password, this.passwordHasher);
  }
}
