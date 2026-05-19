import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBaitDto } from './dto/create-bait.dto';
import { UpdateBaitDto } from './dto/update-bait.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class BaitService {
  constructor(private _prisma: PrismaService) {}
  
  create(userId: number, _createBaitDto: CreateBaitDto) {
    return this._prisma.bait.create ({
      data: {
        ..._createBaitDto,
        user: {
          connect: {id: userId}
        }
      }
    });
  }

  findAll() {
    return this._prisma.bait.findMany({
      where: {
        colour: "red"
      }
    });
  }

  findOne(id: number, userId: number) {
    const bait = this._prisma.bait.findFirst({
      where: {
        id, userId
      }
    });
    if (!bait) {
      throw new NotFoundException('Bait noot found or you do not have permission.');
    }
    return bait;
  }

  update(id: number, _updateBaitDto: UpdateBaitDto) {
    return this._prisma.bait.update({
      where: {id},
      data: UpdateBaitDto
    });
  }

  remove(id: number) {
    return this._prisma.bait.delete({ where: { id } });
  }
}
