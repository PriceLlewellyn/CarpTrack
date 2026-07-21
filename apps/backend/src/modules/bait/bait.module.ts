import { Module } from '@nestjs/common';
import { BaitService } from './bait.service';
import { BaitController } from './bait.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [BaitController],
  providers: [BaitService],
})
export class BaitModule {}
