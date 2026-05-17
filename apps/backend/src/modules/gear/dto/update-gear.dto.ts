import { PartialType } from '@nestjs/swagger';
import { CreateGearDto } from './create-gear.dto';

export class UpdateGearDto extends PartialType(CreateGearDto) {}
