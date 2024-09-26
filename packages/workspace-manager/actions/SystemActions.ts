'use server';
import {validateSystemToken} from "@aiffordable/security/services";
import {createSystemService} from "../factories/ServiceFactory";

export const createFirstAdmin = async (payload: { token: string, email: string, password: string }) => {
  const isValid = validateSystemToken(payload.token);
  if (!isValid) {
    throw new Error('Invalid token');
  }

  const systemService = await createSystemService();
  return systemService.createFirstAdmin(payload);
};
