
import { Module } from '@nestjs/common';
import { UsersController } from './modules/usersModule/users.controller';
import { UsersService } from './modules/usersModule/users.service'; 

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
