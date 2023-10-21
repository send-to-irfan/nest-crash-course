import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Param,
} from '@nestjs/common/decorators';
import { BookService } from './book.service';
import { Book } from './data/book.dto';


@Controller('book')
export class BookController {
  constructor(private BookService: BookService) {}

  @Post('add')
  addBook(@Body() book: Book): string {
    return this.BookService.addBook(book);
  }

  @Put('update')
  updateBook(@Body() book: Book): string {
    return this.BookService.updateBook(book);
  }

  @Get('getall')
  getAllBooks(): Book[] {
    return this.BookService.findAllBooks();
  }

  @Delete('delete/:id')
  deleteBook(@Param('id') bookId: string): string {
    return this.BookService.deleteBook(bookId);
  }
}
