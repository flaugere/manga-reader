import { Injectable } from '@nestjs/common';
import AdmZip from 'adm-zip';
import * as fs from 'fs';

@Injectable()
export class FileService {
  // Get files from a path. Return a string array like ['image.jpg', 'imageB.jpg']
  public async getFiles(path: string): Promise<string[]> {
    try {
      return await fs.promises.readdir(path);
    } catch (error) {
      console.error(error);
    }
    return [];
  }
  /**
   * Prepare file from CBZ package
   *
   * @param path Path to read from
   */
  public async readDirectory(path: string) {
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

  public isDirectory(path: string): boolean {
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
