import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Comic } from 'comic';
import { FileService } from './service/file.service';
import { ComicFactory } from './factory/comic.factory';

@Injectable()
export default class ComicService {
  constructor(
    private configService: ConfigService,
    private fileService: FileService,
    private comicFactory: ComicFactory,
  ) {}

  async findAll(): Promise<Array<Comic>> {
    const comicPath = this.configService.get('COMIC_PATH');
    const comicDirectories = await this.fileService.getFiles(comicPath);
    const comics: Array<Comic> = [];
    for (const directory of comicDirectories) {
      comics.push(await this.comicFactory.create(`${comicPath}/${directory}`));
    }
    return comics;
  }
}
