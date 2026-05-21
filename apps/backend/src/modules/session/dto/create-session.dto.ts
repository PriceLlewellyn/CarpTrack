import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { 
  IsNotEmpty, 
  IsNumber, 
  IsString, 
  IsDate, 
  IsOptional, 
  Min 
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateSessionDto {
  @ApiProperty({ example: 'Feeder Masters', description: 'The name of the gear setup' })
  @IsString()
  @IsNotEmpty()
  title!: string; 

  @ApiProperty({ example: 'General Course'})
  @IsString()
  @IsNotEmpty()
  style!: string;

  @ApiProperty({ example: '2026-05-21T10:00:00Z' })
  @Type(() => Date)
  @IsDate()
  startTime!: Date;

  @ApiProperty({ example: '2026-05-21T18:00:00Z' })
  @Type(() => Date)
  @IsDate()
  endTime?: Date;

  @ApiPropertyOptional({ example: 'Peg 45' })
  @IsString()
  @IsOptional() 
  pegNumber?: string;

  @ApiPropertyOptional({ example: 7.5 })
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @IsOptional()
  @Type(() => Number)
  totalWeight?: number; 
}