import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private _prisma: PrismaService) {}
  
  findNonFisherman() {
    return this._prisma.user.findMany({ where: { fisherman: false } });
  }

  create(_createUserDto: CreateUserDto) {
    return this._prisma.user.create({ data: _createUserDto });
  }

  findAll() {
    return this._prisma.user.findMany({ where: { fisherman: true, }});
  }

  findOne(id: number) {
    return this._prisma.user.findUnique({ where: { id } });
  }

  update(id: number, _updateUserDto: UpdateUserDto) {
    return this._prisma.user.update({
      where: {id},
      data: UpdateUserDto,
    });
  }

  remove(id: number) {
    return this._prisma.user.delete({ where: { id } });
  }
}
