import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpenaiController } from './modules/openai/openai.controller';
import { OpenaiService } from './modules/openai/openai.service';

@Module({
  imports: [],
  controllers: [AppController, OpenaiController],
  providers: [AppService, OpenaiService],
})
export class AppModule {}
