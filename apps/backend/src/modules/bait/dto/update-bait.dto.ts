import { PartialType } from '@nestjs/swagger';
import { CreateBaitDto } from './create-bait.dto';

export class UpdateBaitDto extends PartialType(CreateBaitDto) {}
