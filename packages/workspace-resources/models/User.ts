type UserRole = 'admin' | 'user';

// type UserConstructAttributes = Pick<User, 'email' | 'password' | 'role'> & { id?: number };

export class User {
  id: number;
  email: string;
  password: string;
  role: UserRole;

  constructor(email: string, password: string, role: UserRole) {
    this.setEmail(email);
    this.setPassword(password);
    this.role = role;
  }

  // static buildFromAttributes(values: UserConstructAttributes) {
  //   const user = new User(values.email, values.password, values.role);
  //   if (values.id) {
  //     user.id = values.id;
  //   }
  //   return user;
  // }

  public static newAdmin(email: string, password: string) {
    return new User(email, password, 'admin');
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
  }

  private setPassword(password: string) {
    this.assertValidPassword(password);
    this.password = password;
  }

  public changePassword(newPassword: string) {
    // Add password change logic here: password must not be same as old password.
    this.setPassword(newPassword);
  }

  private setEmail(email: string) {
    this.assertValidEmail(email);
    this.email = email;
  }
}
