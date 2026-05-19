import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateBaitDto {
  @ApiProperty({ example: 'The Krill' })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({ example: 'dynamite Baits' })
  @IsString()
  @IsNotEmpty()
  brand?: string;

  @ApiProperty({ example: "Groundbait" })
  @IsString()
  @IsNotEmpty()
  type!: string;

  @ApiProperty({ example: 'Krill' })
  @IsString()
  @IsNotEmpty()
  flavour!: string;

  @ApiProperty({ example: '2kg' })
  @IsString()
  @IsNotEmpty()
  size!: string;

  @ApiProperty({ example: 'Red' })
  @IsString()
  @IsNotEmpty()
  colour!: string;

  @ApiProperty({ example: 'cloudy' })
  @IsString()
  @IsNotEmpty()
  presentation!: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  @IsNotEmpty()
  liquidised!: boolean;
}





