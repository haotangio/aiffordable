import {pgTable, serial, varchar} from "drizzle-orm/pg-core";

export const userSchema = pgTable('users', {
  id: serial('id').primaryKey(),
  role: varchar('role'),
  email: varchar('email').unique(),
  password: varchar('password'),
});

export type UserObject = typeof userSchema.$inferSelect;
