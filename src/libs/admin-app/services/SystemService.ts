interface SetupFirstAdminInput {
  token: string;
  user: {
    email: string;
    password: string;
  };
}

export class SystemService {
  static async setupFirstAdmin(input: SetupFirstAdminInput) {
  }
}
