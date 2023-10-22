import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Book } from 'src/entity/book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async create(book: Book): Promise<Book> {
    return this.bookRepository.save(book);
  }

  async getAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  async delete(id: string): Promise<string> {
    const bookToDelete = await this.bookRepository.findOne({ where: { id } });

    if (!bookToDelete) {
      return 'No book available with the specified ID';
    }
    await this.bookRepository.remove(bookToDelete);

    return 'Book Deleted Successfully.';
  }

  async update(id: string, updatedFields: Partial<Book>): Promise<string> {
    const bookToUpdate = await this.bookRepository.findOne({ where: { id } });

    if (!bookToUpdate) {
      return 'No book available with the specified ID';
    }
    Object.assign(bookToUpdate, updatedFields);
    await this.bookRepository.save(bookToUpdate);

    return 'Book Updated Successfully.';
  }

  async getBoot(id: string): Promise<Book> {
    return await this.bookRepository.findOne({ where: { id } });
  }
}
