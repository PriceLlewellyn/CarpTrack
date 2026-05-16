import { ApiProperty } from '@nestjs/swagger';
import { User as PrismaUser } from '@prisma/client';

export class UserEntity implements PrismaUser {
  @ApiProperty({ example: 1 })
  id!: number;

  @ApiProperty({ example: 'llewellynprice' })
  username!: string;

  @ApiProperty({ example: 'llewellynprice@example.com' })
  email!: string;

  @ApiProperty({ example: true, default: false })
  fisherman!: boolean;

  @ApiProperty()
  createdAt!: Date;

  @ApiProperty()
  updatedAt!: Date;

}