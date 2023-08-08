import { ConfigModule, ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { ComicController } from './comic.controller';
import ComicService from './comic.service';
import { ComicFactory } from './factory/comic.factory';
import { FileService } from './service/file.service';

describe('ComicController', () => {
  let controller: ComicController;

  const FakeConfigService = {
    provide: ConfigService,
    useValue: {
      get: jest.fn((key: string, defaultValue: string) => {
        switch (key) {
          case 'COMIC_PATH':
            return 'test/fixtures/';
            break;
          default:
            return defaultValue;
        }
      }),
    },
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ComicController],
      providers: [
        AppService,
        FileService,
        ComicService,
        ComicFactory,
        FakeConfigService,
      ],
      imports: [ConfigModule.forRoot()],
    }).compile();

    controller = app.get<ComicController>(ComicController);
  });

  describe('root', () => {
    it('should find all comics', async () => {
      const comics = await controller.findAll();
      expect(comics[0].name).toStrictEqual('boku no hero');
      expect(comics[1].name).toStrictEqual('naruto');
    });
  });
});
