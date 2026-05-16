import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {

  @ApiProperty()
  username!: string;

  @ApiProperty()
  email!: string;

  @ApiProperty()
  age!: number;

  @ApiProperty({ required: false, default: false })
  fisherman?: boolean = false;
}
