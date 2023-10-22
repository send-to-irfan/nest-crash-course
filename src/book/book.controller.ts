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

  @Get('getall')
  async getAll(): Promise<Book[]> {
    return this.BookService.getAll();
  }

  @Delete('delete/:id')
  async deleteBook(@Param('id') id: string): Promise<string> {
    return this.BookService.delete(id);
  }

  @Put('update/:id')
  async updateBook(
    @Param('id') id: string,
    @Body() book: Book,
  ): Promise<string> {
    return this.BookService.update(id, book);
  }

  @Get('get/:id')
  async getBook(@Param('id') id: string): Promise<Book> {
    return this.BookService.getBoot(id);
  }
}
