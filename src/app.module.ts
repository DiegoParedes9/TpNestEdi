import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DtvModule } from './dtv/dtv.module';

@Module({
  imports: [DtvModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
