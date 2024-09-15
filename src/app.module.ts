import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {getDataModule} from './getData/getData.module'
import { authModule } from './auth/auth.module';

@Module({
  imports: [getDataModule,authModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}





