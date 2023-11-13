import { Entity, ManyToOne, Property } from '@mikro-orm/core';
import { CustomBase } from './base/custom-base.entity';
import { Language } from './language.entity';
import { Novel } from './novel.entity';

@Entity({tableName: 'chapters'})
export class Chapter extends CustomBase {
  @Property()
  index: number = 0;

  @Property({nullable: true})
  title: string;

  @Property({fieldName: 'novel_id'})
  novelId: string;

  @Property({type: 'longtext'})
  content: string;

  @Property({fieldName: 'language_id'})
  languageId: number = 0;

  @ManyToOne(() => Novel)
  novel: Novel;

  @ManyToOne(() => Language)
  language: Language;
}
