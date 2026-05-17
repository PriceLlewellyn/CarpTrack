import { Module } from '@nestjs/common';
import { BaitService } from './bait.service';
import { BaitController } from './bait.controller';

@Module({
  controllers: [BaitController],
  providers: [BaitService],
})
export class BaitModule {}
