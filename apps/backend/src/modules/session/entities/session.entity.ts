import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Session as PrismaSession } from '@prisma/client';

export class SessionEntity implements PrismaSession {
  @ApiProperty()
  id!: number;

  @ApiProperty()
  title!: string; 

  @ApiProperty()
  style!: string;

  @ApiProperty()
  startTime!: Date;

  @ApiProperty()
  endTime!: Date;

  @ApiPropertyOptional()
  pegNumber!: string;

  @ApiPropertyOptional()
  totalWeight!: number; 

  @ApiProperty()
  userId!: number;

  @ApiProperty()
  createdAt!: Date;

  @ApiProperty()
  updatedAt!: Date;
}
