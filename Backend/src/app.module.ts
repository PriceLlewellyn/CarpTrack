
import { Module } from '@nestjs/common';
import { usersModule } from './modules/usersModule/users.module';

@Module({
  imports: [usersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
