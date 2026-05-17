import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BaitService } from './bait.service';
import { CreateBaitDto } from './dto/create-bait.dto';
import { UpdateBaitDto } from './dto/update-bait.dto';

@Controller('bait')
export class BaitController {
  constructor(private readonly baitService: BaitService) {}

  @Post()
  create(@Body() createBaitDto: CreateBaitDto) {
    return this.baitService.create(createBaitDto);
  }

  @Get()
  findAll() {
    return this.baitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.baitService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBaitDto: UpdateBaitDto) {
    return this.baitService.update(+id, updateBaitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.baitService.remove(+id);
  }
}
