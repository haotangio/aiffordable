import {NodePgDatabase} from "drizzle-orm/node-postgres";
import {User} from "../models/User";
import {UserRepository} from "../models/UserRepository";
import {UserObject, userSchema} from "./schemas";

export class DrizzleUserRepository implements UserRepository {
  private db: NodePgDatabase;

  constructor(db: NodePgDatabase) {
    this.db = db;
  }

  async add(user: User): Promise<User>{
    const result = await this.db.insert(userSchema).values(user).returning();
    const payload: UserObject = result[0];
    return this.toUserEntity(payload);
    // testKysely();
  }

  findByEmail(email: string): Promise<User | null> {
    return Promise.resolve(null);
    // return Promise.resolve(new User(email, 'password', 'user'));
  }

  private toUserEntity(userObj: UserObject): User {
    const userEntity = new User(
      userObj.email as string,
      userObj.password as string,
      userObj.role as 'admin' | 'user'
    );
    userEntity.id = userObj.id as number;
    return userEntity;
  }

  async findById(id: number): Promise<User | null> {
    const result = await this.db.select(userSchema).where({id}).execute();
    if (result.length === 0) {
      return null;
    }
    return this.toUserEntity(result[0]);
  }
}
