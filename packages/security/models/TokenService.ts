import {User} from "./User";

export interface TokenService {
  generateAccessToken(user: User): string;
  verifyAccessToken(accessToken: string): User;
}
