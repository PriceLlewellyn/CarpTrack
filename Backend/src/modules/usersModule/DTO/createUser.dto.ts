import { IsString, IsEmail, IsNumber, IsOptional, Min, IsArray } from 'class-validator';

export class CreateUserDto {

    @IsString()
    name!: string;

    @IsEmail()
    email!: string;

    @IsNumber()
    @Min(0)
    catches!: number;

    @IsArray()
    @IsString() 
    gear!: string[];

    @IsArray()
    @IsString()
    baits!: string[];

    @IsOptional()
    @IsArray()
    @IsString()
    waypoints?: string[];

    @IsOptional()
    @IsString() 
    sessions?: string;

    @IsOptional()
    @IsString() 
    clubs?: string;
}