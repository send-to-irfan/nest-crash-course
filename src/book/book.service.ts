import { Injectable, Param } from '@nestjs/common';
import { Book } from './data/book.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService {
  public books: Book[] = [];

  // add book
  addBook(book: Book): string {
    book.id = uuidv4();
    this.books.push(book);
    return 'Book added successfully';
  }

  // update

  updateBook(book: Book): string {
    const index = this.books.findIndex((index) => {
      return index.id === book.id;
    });

    this.books[index] = book;
    return 'Book updated successfully';
  }
  // Delete

  deleteBook(bookId: string): string {
    this.books = this.books.filter((index) => {
      return index.id != bookId;
    });

    return 'book deleted succesfully';
  }
  // Get All

  findAllBooks(): Book[] {
    return this.books;
  }
}
