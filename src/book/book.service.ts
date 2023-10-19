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
    const index = this.books.findIndex(
      (existingBook) => existingBook.id === book.id,
    );

    if (index !== -1) {
      this.books[index] = { ...this.books[index], ...book };
      return 'Book updated successfully';
    } else {
      return 'Book not found';
    }
  }

  // Delete

  deleteBook(bookId: string): string {
    const bookIndex = this.books.findIndex((book) => book.id === bookId);

    if (bookIndex !== -1) {
      this.books = this.books.filter((book, index) => index !== bookIndex);
      return 'Book deleted successfully';
    } else {
      return 'Book not found';
    }
  }

  // Get All

  findAllBooks(): Book[] {
    return this.books;
  }
}
