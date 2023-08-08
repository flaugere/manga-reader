import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { FileService } from '../service/file.service';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { ComicFactory } from './comic.factory';

describe('ComicFactory', () => {
  let comicFactory: ComicFactory;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, FileService, ComicFactory],
      imports: [ConfigModule.forRoot()],
    }).compile();

    comicFactory = app.get<ComicFactory>(ComicFactory);
  });

  describe('root', () => {
    it('should return "Welcome !"', async () => {
      expect(
        await comicFactory.create('test/fixtures/boku no hero'),
      ).toStrictEqual({
        groups: [
          {
            name: 'volume 1',
            order: 0,
            pages: [
              { image: 'boku no hero/volume 1/image.jpg', number: 0 },
              { image: 'boku no hero/volume 1/image2.jpg', number: 1 },
            ],
          },
          { name: 'volume 2', order: 1, pages: [] },
        ],
        id: 0,
        image: 'boku no hero/volume 1/image.jpg',
        name: 'boku no hero',
      });
    });
  });
});
