import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateBookDto, UpdateBookDto } from 'src/interfaces';
import { BookDtopValidationPipe } from 'src/pipes/bookDtoValidaton.pipe';
import { BooksService } from 'src/services/books.service';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  async getBooks() {
    const books = await this.booksService.getBooks();
    return books;
  }

  @Get('new')
  getNewBooks() {
    return { newBooks: ['The new earth', 'The monk who sold his ferrari'] };
  }

  @Post('new')
  testPostNew(@Body() body) {
    return {
      message: 'Post working fine',
      body: body,
    };
  }

  @Post()
  async addBook(@Body(BookDtopValidationPipe) data: CreateBookDto) {
    const res = await this.booksService.addBook(data);
    return `New book with id ${res} successfully created`;
  }

  @Delete(':bookId')
  async deleteBook(@Param('bookId') id: string) {
    const res = await this.booksService.deleteBook(parseInt(id));
    return res;
  }

  @Put(':bookId')
  async updateBook(
    @Param('bookId', ParseIntPipe) id: number,
    @Body() data: UpdateBookDto,
  ) {
    const res = await this.booksService.updateBook(id, data);
    return res;
  }

  @Get('topRated')
  async topRated() {
    const res = await this.booksService.getTopRatedBooks();
    return res;
  }

  @Get('maxPrice/:price')
  async maxPrice(@Param('price') amount) {
    const res = await this.booksService.getBookWithPriceLessThan(amount);
    return res;
  }
}
