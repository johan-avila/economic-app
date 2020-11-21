import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PreferencesModule } from './preferences/preferences.module';

@Module({
  imports: [UsersModule, PreferencesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
