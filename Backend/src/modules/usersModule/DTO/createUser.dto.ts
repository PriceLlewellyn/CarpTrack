import { IsString, IsEmail, IsNumber, IsOptional, Min, IsArray } from 'class-validator';

export class CreateUserDto {

    @IsString()
    name!: string;

    @IsEmail()
    email!: string;

    @IsNumber()
    @Min(0)
    catches!: number;

    @IsString()
    gear!: string;

    @IsString()
    baits!: string;

    @IsOptional()
    @IsString()
    waypoints?: string;

    @IsOptional()
    @IsString()
    sessions?: string;

    @IsOptional()
    @IsString()
    clubs?: string;
}