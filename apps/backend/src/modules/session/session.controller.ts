import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SessionService } from './session.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { SessionEntity } from './entities/session.entity';

@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post()
  create(@Body() createSessionDto: CreateSessionDto) {
    const userId = 1;

    return this.sessionService.create(userId, createSessionDto);
  }

  @Get()
    @ApiOkResponse({ type: SessionEntity, isArray: true })
    findAll() {
      return this.sessionService.findAll();
    }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const userId = 1;
    return this.sessionService.findOne(+id, userId);
  }

  @Get('active')
  async findActiveSession(@CurrentUser('id') userId: number) {
    const session = await this.sessionService.findActiveSession(userId)
    return session || null;
  }


  @Patch(':id')
    @ApiCreatedResponse({ type: SessionEntity })
    update(@Param('id') id: string, @Body() updateSessionDto: UpdateSessionDto) {
      return this.sessionService.update(+id, updateSessionDto);
    }

  @Delete(':id')
  @ApiCreatedResponse({ type: SessionEntity })
  remove(@Param('id') id: string) {
    return this.sessionService.remove(+id);
  }
}

