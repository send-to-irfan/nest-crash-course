import { Module } from '@nestjs/common';

@Module({})
export class RootModule {
  constructor() {
    console.log('App Module');
  }
}
