import * as bcrypt from "bcrypt";
import {PasswordHasher} from "../models/PasswordHasher";

export class BcryptPasswordHasher implements PasswordHasher {
  private saltRounds: number;

  constructor(saltRounds: number) {
    this.saltRounds = saltRounds;
  }

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, this.saltRounds);
  }

  async verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }
}
