import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column({ default: false })
  isPublished: boolean;
}
