import { Controller, Get, Post, Param, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    return await this.appService.getHello();
  }

  @Post('/add')
  @HttpCode(204)
  async import(@Param('magnet') magnet: string): Promise<string> {
    return await this.appService.add(magnet);
  }
}
