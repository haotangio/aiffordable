interface SetupFirstAdminInput {
  token: string;
  user: {
    email: string;
    password: string;
  };
}

export class SystemService {
  async createFirstAdmin({token, user}: SetupFirstAdminInput) {

  }
}
