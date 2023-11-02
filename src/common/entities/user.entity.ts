import { Entity, Property } from '@mikro-orm/core';
import { CustomBase } from './base/custom-base.entity';
import { Role } from '../enums/role.enum';

@Entity({tableName: 'users'})
export class User extends CustomBase {
  @Property()
  username: string

  @Property()
  password: string

  @Property({unique: true})
  email: string

  @Property({unique: true, nullable: true})
  phone: string

  @Property({nullable: true})
  avatar?: string

  @Property({nullable: true})
  dob?: Date

  @Property()
  role: Role = Role.User
}
