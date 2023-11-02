import { BadRequestException, Injectable } from '@nestjs/common';
import { DeepPartial, EntityManager } from '@mikro-orm/core';
import { User } from './common/entities/user.entity';
import { CreateUserDto } from './user/dto/create-user.dto';
import { Role } from './common/enums/role.enum';
import { validate } from 'class-validator';

@Injectable()
export class AppService {
  constructor(
    private em: EntityManager,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async setup(dto: DeepPartial<CreateUserDto>) {
    const repository = this.em.getRepository(User)
    const count = await repository.count()
    if (count > 0) {
      throw new BadRequestException('App already setup')
    }
    const rootUser = repository.create({...dto, role: Role.Root, id: 1})
    await this.em.persistAndFlush(rootUser)
    return rootUser;
  }
}
