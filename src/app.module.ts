import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Book } from './entity/book.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: '.local.env',
        }),
      ],
      useFactory: (configService: ConfigService) => ({
        type: 'mssql',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [Book],
        synchronize: configService.get('DB_SYNC'),
        options: {
          encrypt: false,
          enableArithAbort: true,
        },
        trustServerCertificate: true,
      }),
      inject: [ConfigService],
    }),
    BookModule,
  ],
})
export class RootModule {
  constructor() {
    console.log('App Module');
  }
}
