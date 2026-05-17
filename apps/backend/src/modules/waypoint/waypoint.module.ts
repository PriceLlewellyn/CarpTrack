import { Module } from '@nestjs/common';
import { WaypointService } from './waypoint.service';
import { WaypointController } from './waypoint.controller';

@Module({
  controllers: [WaypointController],
  providers: [WaypointService],
})
export class WaypointModule {}
