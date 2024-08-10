import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {getDataModule} from './getData/getData.module'
@Module({
  imports: [getDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
