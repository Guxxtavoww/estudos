import { Injectable } from '@nestjs/common';
import { OpenAIApi, Configuration } from 'openai';

@Injectable()
export class OpenaiService {
  private client: OpenAIApi;

  constructor() {
    this.client = new OpenAIApi(
      new Configuration({
        apiKey: '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',
      })
    );
  }

  async getCompletion(prompt: string): Promise<string> {
    const result = await this.client.createCompletion({
      model: 'gpt-3.5-turbo',
      prompt,
    });

    return result.data.choices[0].text;
  }
}
