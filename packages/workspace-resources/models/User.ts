export class User {
  email: string;
  password: string;
  role: 'admin' | 'user' = 'user';

  constructor(email: string, password: string, role: 'admin' | 'user' = 'user') {
    this.assertValidEmail(email);
    this.assertValidPassword(password);

    this.email = email;
    this.password = password;
    this.role = role;
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
}
