import {User} from ".";
import jwt from 'jsonwebtoken';
import {TokenService} from "../models/TokenService";

export class JwtTokenService implements TokenService {
  private secret: string = 'secret';

  generateAccessToken(user: User): string {
    return jwt.sign({ id: user.id }, this.secret);
  }

  verifyAccessToken(accessToken: string): User {
    return jwt.verify(accessToken, this.secret) as User;
  }
}
