import {createDb, DrizzleUserRepository, UserFactory} from "@aiffordable/workspace-resources";
import {SystemService} from "../services/SystemService";

const dbConfig = {
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT as string),
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
};

// export async function createService<S>(serviceClass: S): Promise<S> {
//   switch (serviceClass) {
//     case SystemService:
//       return await createSystemService() as S;
//     default:
//       throw new Error('Service not found');
//   }
// }

export async function createSystemService() {
  const db = await createDb(dbConfig);
  const userRepository = new DrizzleUserRepository(db);
  const userFactory = new UserFactory(userRepository);
  return new SystemService(
    userRepository,
    userFactory,
  );
}
