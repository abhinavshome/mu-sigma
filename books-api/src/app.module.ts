import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksController } from './controllers/books.controller';
import { BooksService } from './services/books.service';
import { DbService } from './services/db.service';
import { AuthorController } from './controllers/author.controller';

@Module({
  imports: [],
  controllers: [AppController, BooksController, AuthorController],
  providers: [AppService, BooksService, DbService],
})
export class AppModule {}
