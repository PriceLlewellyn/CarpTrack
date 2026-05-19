import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BaitService } from './bait.service';
import { CreateBaitDto } from './dto/create-bait.dto';
import { UpdateBaitDto } from './dto/update-bait.dto';
import { ApiOkResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { BaitEntity } from './entities/bait.entity';

@Controller('bait')
export class BaitController {
  constructor(private readonly baitService: BaitService) {}

  @Post()
  create(@Body() createBaitDto: CreateBaitDto) {
    const userId = 1;

    return this.baitService.create(userId, createBaitDto);
  }

  @Get()
  @ApiOkResponse({ type: BaitEntity, isArray: true })
  findAll() {
    return this.baitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const userId = 1;

    return this.baitService.findOne(+id, userId);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: BaitEntity })
  update(@Param('id') id: string, @Body() updateBaitDto: UpdateBaitDto) {
    return this.baitService.update(+id, updateBaitDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: BaitEntity })
  remove(@Param('id') id: string) {
    return this.baitService.remove(+id);
  }
}
