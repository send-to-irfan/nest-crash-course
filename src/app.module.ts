import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';

@Module({
  imports: [BookModule]
})
export class RootModule {
  constructor() {
    console.log('App Module');
  }
}
