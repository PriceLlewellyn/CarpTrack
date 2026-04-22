
import { Module } from '@nestjs/common';
import { UsersController } from './modules/usersModule/users.controller';

@Module({
  controllers: [UsersController],
})
export class AppModule {}
