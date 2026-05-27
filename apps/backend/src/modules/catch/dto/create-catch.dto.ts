import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCatchDto {
  @ApiProperty({ example: 'Carp' })
  @IsString()
  @IsNotEmpty()
  species!: string;

  @ApiPropertyOptional({ example: 7.5 })
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @IsOptional()
  @Type(() => Number)
  length!: number;

  @ApiPropertyOptional({ example: 4.5 })
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @IsOptional()
  @Type(() => Number)
  weight!: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  imageUrl!: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  fishName!: string;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  isPB!: boolean;

  @ApiPropertyOptional({ example: 3.5 })
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @Type(() => Number)
  lat!: number;

  @ApiPropertyOptional({ example: 3.5 })
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @Type(() => Number)
  lng!: number;

  @ApiPropertyOptional({ example: 45.5 })
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @IsOptional()
  @Type(() => Number)
  waterTemp!: number;

  @ApiPropertyOptional({ example: 67.5 })
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @IsOptional()
  @Type(() => Number)
  pressure!: number;

}
