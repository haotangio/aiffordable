import {DrizzleUserRepository, UserFactory, UserRepository} from "@aiffordable/workspace-resources";

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
    const createdUser = await this.userFactory.buildAdminUser(email, password);
    return this.userRepository.add(createdUser);
  }
}
