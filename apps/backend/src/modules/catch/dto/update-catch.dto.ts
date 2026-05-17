import { PartialType } from '@nestjs/swagger';
import { CreateCatchDto } from './create-catch.dto';

export class UpdateCatchDto extends PartialType(CreateCatchDto) {}
