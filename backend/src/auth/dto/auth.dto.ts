import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

// 1. بيانات التسجيل (Register)
export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  password: string;
}

// 2. بيانات الدخول (Login)
export class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}