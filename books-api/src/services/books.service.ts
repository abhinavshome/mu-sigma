import { Injectable } from '@nestjs/common';
import Db from 'mysql2-async';
import { Book, CreateBookDto, UpdateBookDto } from 'src/interfaces';

@Injectable()
export class BooksService {
  private db: Db;
  constructor() {
    this.db = new Db({
      host: '127.0.0.1',
      user: 'root',
      password: '',
      database: 'booksdb',
      skiptzfix: true,
    });
    console.log('Connected to database');
  }

  async getBooks(): Promise<Book[]> {
    const res = await this.db.getall('select * from books');
    return res;
  }

  async addBook(book: CreateBookDto): Promise<number> {
    const res = await this.db.insert(
      `insert into books (title, author, price, rating) values ('${book.title}', '${book.author}', ${book.price}, ${book.rating})`,
    );
    return res;
  }

  async deleteBook(bookId: number) {
    const res = await this.db.delete(`delete from books where id = ${bookId}`);
    return res;
  }

  async updateBook(bookId: number, book: UpdateBookDto) {
    let query = 'update books set ';
    query += Object.keys(book)
      .map((key) => `${key} = ${book[key]}`)
      .join(', ');
    query += ` where id = ${bookId}`;
    console.log(query);
    const res = await this.db.update(query);
    return res;
  }
}
