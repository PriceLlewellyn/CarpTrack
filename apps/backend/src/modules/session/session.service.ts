import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class SessionService {
  constructor(private _prisma: PrismaService) {}
  
  create(userId: number, _createSessionDto: CreateSessionDto) {
    return this._prisma.session.create({
      data: {
        ..._createSessionDto,
        user: {
          connect: {id: userId}
        }
    }
  });
  }

  findAll() {
    return this._prisma.session.findMany({ 
      where: { 
        totalWeight: 9 }});;
  }

  findOne(id: number, userId: number) {
    const session = this._prisma.gear.findFirst({
          where: {
            id, userId
          }
        });
        if (!session) {
          throw new NotFoundException('Session noot found or you do not have permission.');
        }
        return session;
  }

  update(id: number, _createSessionDto: UpdateSessionDto) {
      return this._prisma.user.update({
            where: {id},
            data: UpdateSessionDto,
          });
    }

  remove(id: number) {
    return this._prisma.gear.delete({ where: { id } });
  }
}
