import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { User } from '../common/entities/user.entity';
import { EntityManager, EntityRepository, wrap } from '@mikro-orm/core';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Role } from '../common/enums/role.enum';

@Injectable()
export class UserService {
  constructor(
    private em: EntityManager,
    @InjectRepository(User) private userEntityRepository: EntityRepository<User>,
  ) {}

  async findOne(id: number) {
    return this.userEntityRepository.findOne(id)
  }

  async create(dto: CreateUserDto) {
    const user = this.userEntityRepository.create(dto)
    if (Boolean(dto.isEditor)) {
      user.role = Role.Editor
    }
    await this.em.persistAndFlush(user)
    return user
  }

  async update(id: number, dto: UpdateUserDto) {
    const user = await this.userEntityRepository.findOneOrFail(id)
    wrap(user).assign(dto)
    await this.em.persistAndFlush(user)
    return user
  }
}
