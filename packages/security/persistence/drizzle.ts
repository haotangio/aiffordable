import {Client, ClientConfig} from "pg";
import {drizzle} from "drizzle-orm/node-postgres";

// let dbConfig: ClientConfig;

export async function createDb(dbConfig: ClientConfig) {
  const client = new Client(dbConfig);
  await client.connect();
  return drizzle(client);
}

// export async function migrateDb(dbConfig: ClientConfig) {
//   const client = new Client(dbConfig);
//   await client.connect();
//   await drizzle(client).migrate();
//   await client.end();
// }
