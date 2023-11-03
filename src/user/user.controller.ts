import { Body, Controller, Get, Patch, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { UserPayload } from '../common/types/user-payload';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Public } from '../common/guards/auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getInfo(@Req() req: { user: UserPayload }) {
    return this.userService.findOne(req.user.id)
  }

  @Public()
  @Post('register')
  register(@Body() dto: CreateUserDto) {
    return this.userService.create(dto)
  }

  @Patch()
  updateInfo(@Req() req: { user: UserPayload }, @Body() dto: UpdateUserDto) {
    return this.userService.update(req.user.id, dto)
  }
}
