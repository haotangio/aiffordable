import {DrizzleUserRepository, UserFactory, UserRepository} from "@aiffordable/security";

interface SetupFirstAdminInput {
  email: string;
  password: string;
}

export class SystemService {
  private userRepository: UserRepository;
  private userFactory: UserFactory;

  constructor(userRepository: DrizzleUserRepository, userFactory: UserFactory) {
    this.userRepository = userRepository;
    this.userFactory = userFactory;
  }

  async createFirstAdmin({email, password}: SetupFirstAdminInput) {
    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new Error('User already exists');
    }

    const context = new TransactionalContext();
    context.start();
    const createdUser = await this.userFactory.newAdminUser(email, password);
    const user = await this.userRepository.add(createdUser);
    context.close();
    return user;
  }
}
