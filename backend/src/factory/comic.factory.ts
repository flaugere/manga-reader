import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import AdmZip from 'adm-zip';
import * as fs from 'fs';

@Injectable()
ComicFactory {
    function create (comicRootPath : string) {
        // Lit le répertoire
        const title : string = subDirectoryName;
        const group : string = subSubDirectoryName;
        // Pour chaque élément du sous répertoire, je crée une page
        let number = 0;
        const page : Page = {
            number:  number,
            image: lienVersImage
        }
    }

    /**
     * Prepare file from CBZ package
     * 
     * @param path Path to read from
     */
    private async function readDirectory(path: string) {
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
  
    private function isDirectory(path: string): boolean {
      try {
        const stats = fs.statSync(path);
        return stats.isDirectory();
      } catch (error) {
        console.error('Error while checking if entity is a directory:', error);
        return false;
      }
    }
}