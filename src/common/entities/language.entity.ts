import { Entity, Property } from '@mikro-orm/core';
import { CustomBase } from './base/custom-base.entity';

@Entity({tableName: 'languages'})
export class Language extends CustomBase {
  @Property()
  code: string;

  @Property()
  name: string;
}
