import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateGearDto {
  @ApiProperty({ example: 'Mojo Bass' })
  @IsString()
  @IsNotEmpty()
  rod!: string;

  @ApiProperty({ example: 'St. Croix' })
  @IsString()
  @IsNotEmpty()
  rodBrand!: string;

  @ApiProperty({ example: 7.5 })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  rodFt!: number;

  @ApiProperty({ example: 'Stradic' })
  @IsString()
  @IsNotEmpty()
  reel!: string;

  @ApiProperty({ example: 'Shimano' })
  @IsString()
  @IsNotEmpty()
  reelBrand!: string;

  @ApiProperty({ example: 3000 })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  reelSize!: number;

  @ApiProperty({ example: '15lb Braid' })
  @IsString()
  @IsNotEmpty()
  line!: string;

  @ApiProperty({ example: 'Spinning Setup' })
  @IsString()
  @IsNotEmpty()
  gearType!: string;
}