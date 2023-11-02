import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  username: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsEmail()
  password: string

  @IsOptional()
  phone: string

  @IsOptional()
  dob: string

  @IsOptional()
  avatar: string
}
