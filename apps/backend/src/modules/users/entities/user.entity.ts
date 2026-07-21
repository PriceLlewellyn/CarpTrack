import { ApiProperty } from '@nestjs/swagger';
import { User as PrismaUser } from '@prisma/client';
import { Exclude } from 'class-transformer';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class UserEntity implements PrismaUser {
  @ApiProperty({ example: 1 })
  id!: number;

  @ApiProperty({ example: 'llewellynprice' })
  @IsNotEmpty()
  username!: string;

  @ApiProperty({ example: 'llewellynprice@example.com' })
  @IsNotEmpty()
  email!: string;

  @ApiProperty({ example: true, default: false })
  @IsNotEmpty()
  fisherman!: boolean;

  @ApiProperty({ example: 26 })
  @IsNotEmpty()
  age!: number;

  @ApiProperty()
  createdAt!: Date;

  @ApiProperty()
  updatedAt!: Date;

  @ApiProperty({ example: 'Llewellyn Price', required: false, nullable: true })
  @IsOptional()
  name!: string | null;

  @Exclude()
  password!: string;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
}}