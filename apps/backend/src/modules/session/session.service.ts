import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
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
    const session = this._prisma.session.findFirst({
          where: {
            id, userId
          }
        });
        if (!session) {
          throw new NotFoundException('Session not found or you do not have permission.');
        }
        return session;
  }

  async findActiveSession(userId: number) {
    const activeSession = await this._prisma.session.findFirst({
      where:{
        id: userId,
        endTime: null,
      }
    })
    return activeSession
  }

  async endSession(id: number, userId: number, _createSessionDto: UpdateSessionDto) {
    const session = await this._prisma.session.findUnique({where: { id } })

    if(!session || session.userId !== userId) {
      throw new UnauthorizedException('Invalid session ownership.');
    }

    const aggregateSession = await this._prisma.catch.aggregate({
        _sum: {weight: true},
        where: {sessionId: id}
    })
    return this._prisma.session.update({
      where: { id },
      data: {
        endTime: new Date(),
        totalWeight: aggregateSession._sum.weight || 0,
      }
    })
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
