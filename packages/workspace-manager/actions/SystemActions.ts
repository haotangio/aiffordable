'use server';
import {UserFactory, PgUserRepository} from "@aiffordable/workspace-resources";
import {SystemService} from "../services/SystemService";

export const createFirstAdmin = async (payload: { token: string, email: string, password: string }) => {
  const userRepository = new PgUserRepository();
  const userFactory = new UserFactory(userRepository);
  const systemService = new SystemService(
    userRepository,
    userFactory,
  );
  return systemService.createFirstAdmin(
    {
      token: payload.token,
      email: payload.email,
      password: payload.password
    }
  );
};
