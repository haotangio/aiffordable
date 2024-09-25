'use server';
import {UserFactory, PrismaUserRepository} from "@aiffordable/workspace-resources";
import {SystemService} from "../services/SystemService";

export const createFirstAdmin = async (payload: { token: string, email: string, password: string }) => {
  const systemService = new SystemService(new PrismaUserRepository(), new UserFactory(new PrismaUserRepository()));
  return systemService.createFirstAdmin(
    {
      token: payload.token,
      user: {
        email: payload.email,
        password: payload.password
      }
    }
  );
};
