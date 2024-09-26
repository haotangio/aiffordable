export interface PasswordHasher {
  hashPassword(password: string): string;
  verifyPassword(password: string, hashedPassword: string): boolean;
}
