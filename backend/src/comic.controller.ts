import { Controller, Get } from '@nestjs/common';
import { ComicService } from './comic.service';
import { Comic } from 'comic';

@Controller()
export class ComicController {
  constructor(private readonly comicService: ComicService) {}

  @Get('/comics')
  findAll(): Array<Comic> {
    return this.comicService.findAll();
  }
}
