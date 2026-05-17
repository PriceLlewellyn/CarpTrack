import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaService } from './prisma/prisma.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { UsersModule } from './modules/users/users.module.js';
import { GearModule } from './modules/gear/gear.module.js';
import { BaitModule } from './bait/bait.module';
import { SessionModule } from './session/session.module';
import { CatchModule } from './catch/catch.module';
import { WaypointModule } from './waypoint/waypoint.module';

@Module({
  imports: [PrismaModule, UsersModule, GearModule, BaitModule, SessionModule, CatchModule, WaypointModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
