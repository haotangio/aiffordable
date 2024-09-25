import {User} from "./User";
import {UserRepository} from "./UserRepository";

export class UserFactory {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async buildAdminUser(email: string, password: string): Promise<User> {
    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new Error('User already exists');
    }

    return new User(email, password, 'admin');
  }
}
