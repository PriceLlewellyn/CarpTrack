import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GearService } from './gear.service';
import { CreateGearDto } from './dto/create-gear.dto';
import { UpdateGearDto } from './dto/update-gear.dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { GearEntity } from './entities/gear.entity';

@Controller('gear')
export class GearController {
  constructor(private readonly gearService: GearService) {}

  @Post()
  create(@Body() createGearDto: CreateGearDto) {
    const userId = 1;

    return this.gearService.create(userId, createGearDto);
  }

  @Get()
  @ApiOkResponse({ type: GearEntity, isArray: true })
  findAll() {
    return this.gearService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const userId = 1;
    
    return this.gearService.findOne(+id, userId);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: GearEntity })
  update(@Param('id') id: string, @Body() updateGearDto: UpdateGearDto) {
    return this.gearService.update(+id, updateGearDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: GearEntity })
  remove(@Param('id') id: string) {
    return this.gearService.remove(+id);
  }
}

//endpoint to tie catches to a specific gear
//endpioint to show favourite brand
//endpoint to display the brand comparision
//endpoint to suggest real reel power to type of fishing
