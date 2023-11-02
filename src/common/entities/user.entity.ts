import { Entity, Property } from '@mikro-orm/core';
import { CustomBase } from './base/custom-base.entity';

@Entity({tableName: 'users'})
export class User extends CustomBase {
  @Property()
  username: string

  @Property({unique: true})
  email: string

  @Property({nullable: true})
  avatar: string

  @Property({nullable: true})
  dob: Date
}
