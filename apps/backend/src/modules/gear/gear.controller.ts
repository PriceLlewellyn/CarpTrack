import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GearService } from './gear.service';
import { CreateGearDto } from './dto/create-gear.dto';
import { UpdateGearDto } from './dto/update-gear.dto';

@Controller('gear')
export class GearController {
  constructor(private readonly gearService: GearService) {}

  @Post()
  create(@Body() createGearDto: CreateGearDto) {
    return this.gearService.create(createGearDto);
  }

  @Get()
  findAll() {
    return this.gearService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gearService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGearDto: UpdateGearDto) {
    return this.gearService.update(+id, updateGearDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gearService.remove(+id);
  }
}
