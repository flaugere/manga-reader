import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { FileService } from '../service/file.service';
import { Group, Comic, Page } from 'comic';

@Injectable()
export class ComicFactory {
  constructor(private fileService: FileService) {}

  async create(comicRootPath: string) {
    const result = comicRootPath.split('/');
    const title: string = result.pop();
    const groupNames: Array<string> = await fs.promises.readdir(comicRootPath);
    const groups: Array<Group> = [];
    for (const [index, group] of groupNames.entries()) {
      const basePath = `${comicRootPath}/${group}`;
      const files = await this.fileService.getFiles(basePath);
      const pages: Array<Page> = [];
      files.forEach((file, indexFile) => {
        pages.push({
          number: indexFile,
          image: `${title}/${group}/${file}`,
        });
      });
      groups.push({
        name: group,
        order: index,
        pages: pages,
      });
    }

    const comic: Comic = {
      id: 0,
      name: title,
      image: groups[0]?.pages[0].image,
      groups: groups,
    };

    return comic;
  }
}
