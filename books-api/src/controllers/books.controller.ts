import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('books')
export class BooksController {
  @Get()
  getBooks() {
    return ['The Alchemist', 'Power of Now'];
  }

  @Get('new')
  getNewBooks() {
    return { newBooks: ['The new earth', 'The monk who sold his ferrari'] };
  }

  @Post()
  addBook(@Body() data) {
    return data;
  }
}
