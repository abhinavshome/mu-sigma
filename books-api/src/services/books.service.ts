import { Injectable } from '@nestjs/common';
// import Db from 'mysql2-async';
import { Book, CreateBookDto, UpdateBookDto } from 'src/interfaces';
import * as sql from 'mssql';

@Injectable()
export class BooksService {
  constructor() {
    sql.connect({
      server: 'INBAAVVMMSUSQL',
      user: 'msu_user',
      password: 'Password@123',
      database: 'ContosoRetailDW',
      pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
      },
      options: {
        encrypt: true, // for azure
        trustServerCertificate: true, // change to true for local dev / self-signed certs
      },
    });
    console.log('Connected to database');
  }

  async getBooks(): Promise<Book[]> {
    const res = await sql.query('select * from books');
    return res;
  }

  async addBook(book: CreateBookDto): Promise<number> {
    const res = await sql.query(
      `insert into books (title, author, price, rating) values ('${book.title}', '${book.author}', ${book.price}, ${book.rating})`,
    );
    return res;
  }

  async deleteBook(bookId: number) {
    const res = await sql.query(`delete from books where id = ${bookId}`);
    return res;
  }

  async updateBook(bookId: number, book: UpdateBookDto) {
    let query = 'update books set ';
    query += Object.keys(book)
      .map((key) => `${key} = ${book[key]}`)
      .join(', ');
    query += ` where id = ${bookId}`;
    console.log(query);
    const res = await sql.query(query);
    return res;
  }
}
