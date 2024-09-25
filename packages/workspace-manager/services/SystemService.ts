import {UserFactory, PgUserRepository, UserRepository} from "@aiffordable/workspace-resources";

interface SetupFirstAdminInput {
  token: string;
  email: string;
  password: string;
}

export class SystemService {
  private userRepository: UserRepository;
  private userFactory: UserFactory;

  constructor(userRepository: PgUserRepository, userFactory: UserFactory) {
    this.userRepository = userRepository;
    this.userFactory = userFactory;
  }

  async createFirstAdmin({token, email, password}: SetupFirstAdminInput) {
    const isValid = await this.validateSystemToken(token);
    if (!isValid) {
      throw new Error('Invalid token');
    }

    const createdUser = await this.userFactory.buildAdminUser(email, password);
    return this.userRepository.save(createdUser);
  }

  private async validateSystemToken(token: string): Promise<boolean> {
    return true;
  }
}
