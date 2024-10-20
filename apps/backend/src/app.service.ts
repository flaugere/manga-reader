import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FileService } from './service/file.service';

@Injectable()
export class AppService {
  constructor(
    private configService: ConfigService,
    private fileService: FileService,
  ) {}

  getHello(): string {
    return 'Welcome ! Bienvenue !';
  }
  /**
   * Download files from magnet
   */
  async add(magnet: string): Promise<string> {
    return Promise.resolve(magnet);
  }
}
