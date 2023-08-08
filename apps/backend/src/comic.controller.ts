import { Controller, Get } from '@nestjs/common';
import ComicService from './comic.service';
import { Comic } from 'comic';

@Controller()
export class ComicController {
  constructor(private readonly comicService: ComicService) {}

  @Get('/comics')
  async findAll(): Promise<Array<Comic>> {
    return await this.comicService.findAll();
  }
}
