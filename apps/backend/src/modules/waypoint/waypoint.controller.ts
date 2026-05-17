import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WaypointService } from './waypoint.service';
import { CreateWaypointDto } from './dto/create-waypoint.dto';
import { UpdateWaypointDto } from './dto/update-waypoint.dto';

@Controller('waypoint')
export class WaypointController {
  constructor(private readonly waypointService: WaypointService) {}

  @Post()
  create(@Body() createWaypointDto: CreateWaypointDto) {
    return this.waypointService.create(createWaypointDto);
  }

  @Get()
  findAll() {
    return this.waypointService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.waypointService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWaypointDto: UpdateWaypointDto) {
    return this.waypointService.update(+id, updateWaypointDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.waypointService.remove(+id);
  }
}
