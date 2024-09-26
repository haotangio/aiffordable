import {User, UserRepository} from ".";
import {PasswordHasher} from "@aiffordable/security/models/PasswordHasher";
import {TokenService} from "../models/TokenService";

export class AuthenticationService {
  private userRepository: UserRepository;
  private passwordHasher: PasswordHasher;
  private tokenService: TokenService;

  constructor(userRepository: UserRepository, passwordHasher: PasswordHasher, tokenService: TokenService) {
    this.userRepository = userRepository;
    this.passwordHasher = passwordHasher;
    this.tokenService = tokenService;
  }

  async authenticate(email: string, password: string) {
    const user = await this.userRepository.findByEmail(email);
    if (!user || !this.passwordHasher.verifyPassword(password, user.password)) {
      throw new Error('Invalid email or password');
    }

    const accessToken = this.tokenService.generateAccessToken(user);
    return {
      accessToken,
      user
    };
  }

  async verifyAccessToken(accessToken: string): Promise<User> {
    const {id} = this.tokenService.verifyAccessToken(accessToken);
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new Error('Invalid access token');
    }

    return user;
  }
}
