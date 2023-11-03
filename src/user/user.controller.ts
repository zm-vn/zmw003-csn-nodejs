import { Controller, Get, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { UserPayload } from '../common/types/user-payload';
import { Roles } from '../common/decorators/roles.decorators';
import { Role } from '../common/enums/role.enum';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getInfo(@Req() req: { user: UserPayload }) {
    return this.userService.findOne(req.user.id)
  }
}
