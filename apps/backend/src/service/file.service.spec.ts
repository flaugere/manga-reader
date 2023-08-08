import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from '../app.service';
import { AppController } from '../app.controller';
import { FileService } from './file.service';

describe('FileService', () => {
  let fileService: FileService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, FileService],
      imports: [ConfigModule.forRoot()],
    }).compile();

    fileService = app.get<FileService>(FileService);
  });

  describe('get files', () => {
    it('all data', async () => {
      expect(
        await fileService.getFiles('test/fixtures/boku no hero/volume 1'),
      ).toStrictEqual(['image.jpg', 'image2.jpg']);
    });
  });
});
