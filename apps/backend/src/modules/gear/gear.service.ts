import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGearDto } from './dto/create-gear.dto';
import { UpdateGearDto } from './dto/update-gear.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class GearService {
  constructor(private _prisma: PrismaService) {}

  create(userId: number, _createGearDto: CreateGearDto) {
    return this._prisma.gear.create({
      data: {
        ..._createGearDto,
        user: {
          connect: {id: userId}
        }
    }
  });
  }

  findAll() {
    return this._prisma.gear.findMany({ 
      where: { 
        type: "Reel" }});
  }

  findOne(id: number, userId: number) {
    const gear = this._prisma.gear.findFirst({
      where: {
        id, userId
      }
    });
    if (!gear) {
      throw new NotFoundException('Gear noot found or you do not have permission.');
    }
    return gear;
  }

  update(id: number, _updateGearDto: UpdateGearDto) {
    return this._prisma.user.update({
          where: {id},
          data: UpdateGearDto,
        });
  }

  remove(id: number) {
    return this._prisma.gear.delete({ where: { id } });
  }
}
