import { Module } from '@nestjs/common';
import { XiaomiDbService } from './xiaomi-db.service';

@Module({
  providers: [XiaomiDbService],
  exports: [XiaomiDbService],
})
export class XiaomiDbModule {}
