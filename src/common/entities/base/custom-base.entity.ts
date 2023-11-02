import { PrimaryKey, Property } from '@mikro-orm/core';

export abstract class CustomBase {
  @PrimaryKey()
  id!: number;

  @Property()
  createdAt: Date = new Date();

  @Property({onUpdate: () => new Date()})
  updatedAt: Date = new Date();
}
