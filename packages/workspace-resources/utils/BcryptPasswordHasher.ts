import * as bcrypt from "bcrypt";
import {PasswordHasher} from "../models/PasswordHasher";

export class BcryptPasswordHasher implements PasswordHasher {
  private saltRounds: number;

  constructor(saltRounds: number) {
    this.saltRounds = saltRounds;
  }

  hashPassword(password: string): string {
    return bcrypt.hashSync(password, this.saltRounds);
  }

  verifyPassword(password: string, hashedPassword: string): boolean {
    return bcrypt.compareSync(password, hashedPassword);
  }
}
