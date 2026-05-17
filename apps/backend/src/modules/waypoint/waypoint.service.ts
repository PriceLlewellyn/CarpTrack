import { Injectable } from '@nestjs/common';
import { CreateWaypointDto } from './dto/create-waypoint.dto';
import { UpdateWaypointDto } from './dto/update-waypoint.dto';

@Injectable()
export class WaypointService {
  create(createWaypointDto: CreateWaypointDto) {
    return 'This action adds a new waypoint';
  }

  findAll() {
    return `This action returns all waypoint`;
  }

  findOne(id: number) {
    return `This action returns a #${id} waypoint`;
  }

  update(id: number, updateWaypointDto: UpdateWaypointDto) {
    return `This action updates a #${id} waypoint`;
  }

  remove(id: number) {
    return `This action removes a #${id} waypoint`;
  }
}
