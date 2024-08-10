import { Module } from '@nestjs/common';
import { getDataController } from './getData.controller';
import { DbModule } from 'src/db/db.module';
import { getDataService } from './getData.service';

@Module({
  controllers: [getDataController],
  providers: [getDataService],
  imports: [DbModule],
})
export class getDataModule {}
