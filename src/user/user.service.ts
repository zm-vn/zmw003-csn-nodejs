import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { User } from '../common/entities/user.entity';
import { EntityRepository } from '@mikro-orm/core';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userEntityRepository: EntityRepository<User>,
  ) {}

  async findOne(id: number) {
    return this.userEntityRepository.findOne(id)
  }
}
