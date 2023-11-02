import { BeforeCreate, Entity, Property } from '@mikro-orm/core';
import { CustomBase } from './base/custom-base.entity';
import { Role } from '../enums/role.enum';
import { hashSync } from 'bcrypt';
import { UserPayload } from '../types/user-payload';

@Entity({tableName: 'users'})
export class User extends CustomBase {
  @Property()
  username: string

  @Property({hidden: true})
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

  @BeforeCreate()
  hashPassword() {
    this.password = hashSync(this.password, 10)
  }

  getPayload(): UserPayload {
    return {
      id: this.id,
      username: this.username,
      role: this.role,
    }
  }
}
