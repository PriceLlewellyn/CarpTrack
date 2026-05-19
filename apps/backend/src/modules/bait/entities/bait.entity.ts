import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Bait as PrismaBait } from '@prisma/client';

export class BaitEntity implements PrismaBait {

  @ApiProperty()
  id!: number; 

  @ApiProperty()
  name!: string;

  @ApiProperty()
  brand!: string;

  @ApiProperty()
  type!: string;

  @ApiPropertyOptional()
  flavor!: string;

  @ApiPropertyOptional()
  size!: string;

  @ApiPropertyOptional()
  color!: string;

  @ApiPropertyOptional()
  presentation!: string;

  @ApiPropertyOptional()
  liquidUsed!: string;

  @ApiProperty()
  userId!: number;

  @ApiProperty()
  createdAt!: Date;

  @ApiProperty()
  updatedAt!: Date;
}