import {UserFactory, PrismaUserRepository, UserRepository} from "@aiffordable/workspace-resources";

interface SetupFirstAdminInput {
  token: string;
  user: {
    email: string;
    password: string;
  };
}

export class SystemService {
  private userRepository: UserRepository;
  private userFactory: UserFactory;

  constructor(userRepository: PrismaUserRepository, userFactory: UserFactory) {
    this.userRepository = userRepository;
    this.userFactory = userFactory;
  }

  async createFirstAdmin({token, user}: SetupFirstAdminInput) {
    const isValid = await this.validateSystemToken(token);
    if (!isValid) {
      throw new Error('Invalid token');
    }

    const createdUser = await this.userFactory.buildAdminUser(user.email, user.password);
    return this.userRepository.save(createdUser);
  }

  private async validateSystemToken(token: string): Promise<boolean> {
    return true;
  }
}
