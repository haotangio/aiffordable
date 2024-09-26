import {Client, ClientConfig} from "pg";
import {drizzle} from "drizzle-orm/node-postgres";

export async function createDb(dbConfig: ClientConfig) {
  const client = new Client(dbConfig);
  await client.connect();
  return drizzle(client);
}
