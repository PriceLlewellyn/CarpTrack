import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateGearDto {
  @ApiProperty({ example: 'Shimano' })
  @IsString()
  @IsNotEmpty()
  brand!: string;

  @ApiProperty({ example: 'Stradic FL' })
  @IsString()
  @IsNotEmpty()
  model!: string;

  @ApiProperty({ example: 'Reel' })
  @IsString()
  @IsNotEmpty()
  type!: string;  

  @ApiPropertyOptional({ example: 'Spinning' })
  @IsOptional()
  @IsString()
  subType?: string;

  @ApiPropertyOptional({ example: '3000' })
  @IsOptional()
  @IsString()
  size?: string;
}
