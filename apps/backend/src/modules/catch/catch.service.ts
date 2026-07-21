import { Injectable } from '@nestjs/common';
import { CreateCatchDto } from './dto/create-catch.dto';
import { UpdateCatchDto } from './dto/update-catch.dto';

@Injectable()
export class CatchService {
  create(_createCatchDto: CreateCatchDto) {
    return 'This action adds a new catch';
  }

  findAll() {
    return `This action returns all catch`;
  }

  findOne(id: number) {
    return `This action returns a #${id} catch`;
  }

  update(id: number, _updateCatchDto: UpdateCatchDto) {
    return `This action updates a #${id} catch`;
  }

  remove(id: number) {
    return `This action removes a #${id} catch`;
  }
}
