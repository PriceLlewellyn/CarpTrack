import { IsEmail, IsNotEmpty, IsString, IsInt, IsOptional } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  email!: string;

  @IsString()
  @IsNotEmpty()
  password!: string; 

  @IsString()
  @IsNotEmpty()
  username!: string; 

  @IsInt()
  @IsOptional() 
  age?: number;     

  @IsString()
  @IsOptional()
  name?: string;
}