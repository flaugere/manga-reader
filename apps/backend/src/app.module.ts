import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComicController } from './comic.controller';
import ComicService from './comic.service';
import { ComicFactory } from './factory/comic.factory';
import { FileService } from './service/file.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, ComicController],
  providers: [AppService, ComicService, ComicFactory, FileService],
})
export class AppModule {}
