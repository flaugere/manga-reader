import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComicController } from './comic.controller';
import { ComicService } from './comic.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, ComicController],
  providers: [AppService, ComicService],
})
export class AppModule {}
