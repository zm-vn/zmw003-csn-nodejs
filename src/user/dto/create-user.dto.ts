import { IsDateString, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateUserDto {
  @IsNotEmpty()
  username: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  password: string

  @IsOptional()
  phone: string

  @IsOptional()
  @IsDateString()
  dob: Date

  @IsOptional()
  avatar: string
}
