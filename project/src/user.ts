import { PrimaryKey, Enum, Property, IdEntity, Entity } from "mikro-orm";

export enum UserType {
  standard = "standard",
  admin = "admin"
}

@Entity()
export class User implements IdEntity<User> {
  @PrimaryKey({ type: "number" })
  id!: number;

  @Enum(() => UserType)
  type!: UserType;

  @Property({ type: "string" })
  username!: string;
}
