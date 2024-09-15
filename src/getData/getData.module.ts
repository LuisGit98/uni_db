import { Module } from '@nestjs/common';
import { getDataController } from './getData.controller';
import { DbModule } from 'src/db/db.module';
import { getDataService } from './getData.service';

@Module({
  imports: [DbModule],
  providers: [getDataService],
  controllers: [getDataController],
  exports:[getDataModule]
})
export class getDataModule {}
