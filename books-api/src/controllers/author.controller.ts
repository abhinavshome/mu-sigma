import { Controller, Get, Param } from '@nestjs/common';
import { BooksService } from 'src/services/books.service';

@Controller('author')
export class AuthorController {
  constructor(private bookService: BooksService) {}

  @Get('like/:name')
  async authorLike(@Param('name') authorName: string) {
    console.log('in author controller');
    return await this.bookService.findBooksWithAuthorLike(authorName);
  }
}
