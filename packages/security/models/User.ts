import {PasswordHasher} from "./PasswordHasher";

type UserRole = 'admin' | 'user';

// type UserConstructAttributes = Pick<User, 'email' | 'password' | 'role'> & { id?: number };

export class User {
  id: number;
  fullName: string;
  email: string;
  password: string;
  role: UserRole;

  private constructor() {}

  // static buildFromAttributes(values: UserConstructAttributes) {
  //   const user = new User(values.email, values.password, values.role);
  //   if (values.id) {
  //     user.id = values.id;
  //   }
  //   return user;
  // }

  public static newAdmin(email: string, password: string, passwordHasher: PasswordHasher) {
    const user = new User();
    user.setEmail(email);

    user.assertValidPassword(password);
    user.password = passwordHasher.hashPassword(password);
    user.role = 'admin';

    return user;
  }

  private assertValidEmail(email: string) {
    if (!email.includes('@')) {
      throw new Error('Invalid email');
    }
  }

  private assertValidPassword(password: string) {
    if (password.length < 8) {
      throw new Error('Password must be at least 8 characters long');
    }

    if (password === '12345678') {
      throw new Error('Password must not be so simple');
    }
  }

  private setEmail(email: string) {
    this.assertValidEmail(email);
    this.email = email;
  }
}
