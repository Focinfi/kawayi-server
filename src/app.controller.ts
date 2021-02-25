import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { cellCollector } from './indexer/collector';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    const cells = await cellCollector.count();
    console.log("cells: ", cells);
    // for await (const cell of cellCollector.collect()) {
    //   console.log(cell);
    // }
    return this.appService.getHello();
  }
}
