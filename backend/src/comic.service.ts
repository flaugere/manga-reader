import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Comic } from 'comic';

@Injectable()
export class ComicService {
  
  constructor(private configService: ConfigService) {}
  
  findAll(): Array<Comic> {
    
    return [{ id: 1, name: 'Boku No hero' }];
  }
  /**
   * Prepare file from CBZ package
   * 
   * @param path Path to read from
   */
  private async list(path: string) {
    await fs.readdir(path, async (err, files) => {
      if (err) {
        console.error('Error reading directory:', err);
        return;
      }
      files.forEach(async (file) => {
        const fullPath = `${path}/${file}`;
        if (this.isDirectory(fullPath)) {
          this.readDirectory(fullPath);
          return;
        }
        await this.readCBZFile(fullPath);
      });
    });
  }
}
