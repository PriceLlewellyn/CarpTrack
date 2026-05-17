import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Gear as PrismaGear } from '@prisma/client';

export class GearEntity implements PrismaGear {
  @ApiProperty()
  id!: number; 

  @ApiProperty()
  rod!: string;

  @ApiProperty()
  rodBrand!: string;

  @ApiProperty()
  rodFt!: number;

  @ApiPropertyOptional()
  reel!: string;

  @ApiPropertyOptional()
  reelBrand!: string;

  @ApiPropertyOptional()
  reelSize!: number;

  @ApiPropertyOptional()
  line!: string;

  @ApiPropertyOptional()
  gearType!: string;

  @ApiProperty()
  userId!: number;

  @ApiProperty()
  createdAt!: Date;

  @ApiProperty()
  updatedAt!: Date;
}