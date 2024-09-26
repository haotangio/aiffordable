import {pgTable, serial, varchar} from "drizzle-orm/pg-core";

export const userSchema = pgTable('users', {
  id: serial('id').primaryKey(),
  fullName: varchar('full_name').notNull(),
  role: varchar('role').notNull(),
  email: varchar('email').notNull().unique(),
  password: varchar('password').notNull(),
});

export type UserObject = typeof userSchema.$inferSelect;
