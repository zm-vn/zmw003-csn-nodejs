import * as process from 'process';
import { JwtModuleOptions } from '@nestjs/jwt';

export const JwtConfig: JwtModuleOptions = {
  global: true,
  secret: process.env.JWT_SECRET || 'secret',
  signOptions: {
    expiresIn: process.env.JWT_TTL || '7d',
  },
}
