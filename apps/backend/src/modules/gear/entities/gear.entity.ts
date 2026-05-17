import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Gear as PrismaGear } from '@prisma/client';

export class GearEntity implements PrismaGear {
  @ApiProperty()
  id!: number; 

  @ApiProperty()
  brand!: string;

  @ApiProperty()
  model!: string;

  @ApiProperty()
  type!: string;

  @ApiPropertyOptional({ nullable: true })
  subType!: string | null;

  @ApiPropertyOptional({ nullable: true })
  size!: string | null;

  @ApiProperty()
  userId!: number;

  @ApiProperty()
  createdAt!: Date;

  @ApiProperty()
  updatedAt!: Date;
}