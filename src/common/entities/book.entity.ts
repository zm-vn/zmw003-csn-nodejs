import { CustomBase } from './base/custom-base.entity';
import { Entity } from '@mikro-orm/core';

@Entity({tableName: 'books'})
export class Book extends CustomBase {

}
