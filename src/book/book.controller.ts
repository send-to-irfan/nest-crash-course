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

  @Post('create')
  async create(@Body() book: Book): Promise<Book> {
    return this.BookService.create(book);
  }
}
