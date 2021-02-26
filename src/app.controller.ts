import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { cellCollector } from './indexer/collector';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    return `cells: ${cellCollector.count()}`;
  }
}
