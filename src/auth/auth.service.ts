import { Injectable, UnauthorizedException } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/core';
import { LoginDto } from './dto/login.dto';
import { User } from '../common/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private em: EntityManager, private jwtService: JwtService) {}

  async login(dto: LoginDto) {
    const repository = this.em.getRepository(User)
    const user = await repository.findOne({username: dto.username})
    if (!user || !compareSync(dto.password, user.password)) {
      throw new UnauthorizedException('Incorrect email or password');
    }
    const payload = user.getPayload()
    const accessToken = await this.jwtService.signAsync(payload)
    const refreshToken = await this.jwtService.signAsync(payload, {expiresIn: '30d'})
    return {
      accessToken,
      refreshToken,
    }
  }
}
