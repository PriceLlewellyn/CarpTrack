import { Injectable } from '@nestjs/common';
import { CreateBaitDto } from './dto/create-bait.dto';
import { UpdateBaitDto } from './dto/update-bait.dto';

@Injectable()
export class BaitService {
  create(createBaitDto: CreateBaitDto) {
    return 'This action adds a new bait';
  }

  findAll() {
    return `This action returns all bait`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bait`;
  }

  update(id: number, updateBaitDto: UpdateBaitDto) {
    return `This action updates a #${id} bait`;
  }

  remove(id: number) {
    return `This action removes a #${id} bait`;
  }
}
