import { Controller, Get, Query } from '@nestjs/common';

import { OpenaiService } from './openai.service';

@Controller('openai')
export class OpenaiController {
  constructor(private openaiService: OpenaiService) {}

  @Get('completion')
  async getCompletion(@Query('prompt') prompt: string): Promise<string> {
    return await this.openaiService.getCompletion(prompt);
  }
}
