import { Injectable } from '@nestjs/common';
// import Db from 'mysql2-async';
import { CreateBookDto, UpdateBookDto } from 'src/interfaces';
import { DbService } from './db.service';

@Injectable()
export class BooksService {
  constructor(private db: DbService) {}

  async getBooks(): Promise<any> {
    const res = await this.db.runQuery('select * from book');
    return res;
  }

  async addBook(book: CreateBookDto): Promise<any> {
    const res = await this.db.runQuery(
      `insert into book (title, author, price, rating) values ('${book.title}', '${book.author}', ${book.price}, ${book.rating})`,
    );
    return res;
  }

  async deleteBook(bookId: number) {
    const res = await this.db.runQuery(`delete from book where id = ${bookId}`);
    return res;
  }

  async updateBook(bookId: number, book: UpdateBookDto) {
    let query = 'update book set ';
    query += Object.keys(book)
      .map((key) => `${key} = ${book[key]}`)
      .join(', ');
    query += ` where id = ${bookId}`;
    console.log(query);
    const res = await this.db.runQuery(query);
    return res;
  }

  async getTopRatedBooks() {
    const res = await this.db.runQuery('select * from book where rating = 5');
    return res;
  }

  async getBookWithPriceLessThan(price: number) {
    const res = await this.db.runQuery(
      `select * from book where price < ${price}`,
    );
    return res;
  }

  async findBooksWithAuthorLike(authorName: string) {
    return await this.db.runQuery(
      `select * from book where author like '%${authorName}%'`,
    );
  }
}
