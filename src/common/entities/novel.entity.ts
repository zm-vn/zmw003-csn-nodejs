import { Collection, Entity, ManyToOne, OneToMany, Property } from '@mikro-orm/core';
import { CustomBase } from './base/custom-base.entity';
import { NovelStatus } from '../enums/novel-status.enum';
import { PublishStatus } from '../enums/publish-status.enum';
import { User } from './user.entity';
import { Chapter } from './chapter.entity';

@Entity({tableName: 'novels'})
export class Novel extends CustomBase {
  @Property()
  title: string;

  @Property()
  author: string;

  @Property()
  descriptions: string;

  @Property({fieldName: 'user_id'})
  userId: number;

  @Property({type: 'tinyint'})
  status: NovelStatus = NovelStatus.Ongoing;

  @Property({type: 'tinyint'})
  published: PublishStatus = PublishStatus.Unpublished;

  @ManyToOne(() => User)
  user: User;

  @OneToMany(() => Chapter, chapter => chapter.novel, {orphanRemoval: true})
  chapters: Collection<Chapter>;
}
