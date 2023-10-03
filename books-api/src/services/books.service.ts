import { Injectable } from '@nestjs/common';
// import Db from 'mysql2-async';
import { CreateBookDto, UpdateBookDto } from 'src/interfaces';
import * as sql from 'mssql';
import dbConfig from '../config.json';

@Injectable()
export class BooksService {
  constructor() {
    sql.connect(dbConfig.musigma);
    console.log('Connected to database');
  }

  async getBooks(): Promise<any> {
    const res = await sql.query('select * from book');
    return res;
  }

  async addBook(book: CreateBookDto): Promise<any> {
    const res = await sql.query(
      `insert into book (title, author, price, rating) values ('${book.title}', '${book.author}', ${book.price}, ${book.rating})`,
    );
    return res;
  }

  async deleteBook(bookId: number) {
    const res = await sql.query(`delete from book where id = ${bookId}`);
    return res;
  }

  async updateBook(bookId: number, book: UpdateBookDto) {
    let query = 'update book set ';
    query += Object.keys(book)
      .map((key) => `${key} = ${book[key]}`)
      .join(', ');
    query += ` where id = ${bookId}`;
    console.log(query);
    const res = await sql.query(query);
    return res;
  }
}
