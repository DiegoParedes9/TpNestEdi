import { Module } from '@nestjs/common';
import { DtvController } from './dtv.controller';
import { DtvService } from './dtv.service';

@Module({
  controllers: [DtvController],
  providers: [DtvService],
  exports: [DtvService],
})
export class DtvModule {}
