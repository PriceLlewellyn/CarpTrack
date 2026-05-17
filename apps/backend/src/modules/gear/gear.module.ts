import { Module } from '@nestjs/common';
import { GearService } from './gear.service';
import { GearController } from './gear.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  controllers: [GearController],
  providers: [GearService],
  imports: [PrismaModule],
})
export class GearModule {}
