import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateGearDto {
  @ApiProperty()
  title!: string; 

  @ApiProperty()
  style!: string;

  @ApiProperty()
  startTime!: Date;

  @ApiProperty()
  endTime?: Date;

  @ApiPropertyOptional()
  pegNumber?: string;

  @ApiPropertyOptional()
  totalWeight?: number; 

  @ApiProperty()
  createdAt!: Date;

  @ApiProperty()
  updatedAt!: Date;
}
