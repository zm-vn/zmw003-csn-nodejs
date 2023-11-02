import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtConfig } from '../common/configs/jwt.config';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
