import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { DeepPartial } from '@mikro-orm/core';
import { CreateUserDto } from './user/dto/create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('app/setup')
  setup(@Body() dto: DeepPartial<CreateUserDto>) {
    return this.appService.setup(dto)
  }
}
