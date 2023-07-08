import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import AdmZip from 'adm-zip';
import * as fs from 'fs';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  async getHello(): Promise<string> {
    try {
      await this.readDirectory(`${this.configService.get('COMIC_PATH')}`);
      return Promise.resolve('Welcome ! Bienvenue !');
    } catch (error) {
      throw new Error('Failed to get hello: ' + error);
    }
  }
  /**
   * Download files from magnet
   */
  async add(magnet: string): Promise<string> {
    return Promise.resolve(magnet);
  }
  /**
   * Prepare file from CBZ package
   * 
   * @param path Path to read from
   */
  private async readDirectory(path: string) {
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

  private isDirectory(path: string): boolean {
    try {
      const stats = fs.statSync(path);
      return stats.isDirectory();
    } catch (error) {
      console.error('Error while checking if entity is a directory:', error);
      return false;
    }
  }

  async readCBZFile(filepath: string) {
    const zip = new AdmZip(filepath);
    const zipEntries = zip.getEntries();
    const extensionRegex = /\.[^.\\/]*$/;
    const newDirectory = filepath.replace(extensionRegex, '');
    fs.mkdirSync(newDirectory, { recursive: false });
    zipEntries.forEach((entry) => {
      if (!entry.isDirectory) {
        console.log(`File: ${entry.entryName}`);
        const data = zip.readFile(entry);
        fs.writeFileSync(`${newDirectory}/${entry.entryName}`, data);
      }
    });
  }
}
