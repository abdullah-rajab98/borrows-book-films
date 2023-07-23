import { Injectable } from '@nestjs/common';
import { CreateBookDto, UpdateBookDto } from '../../dtos/books.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from '../../entities/books.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
  constructor(@InjectRepository(Book) private readonly repo: Repository<Book>) { }
  create(createBookDto: CreateBookDto) {
    return this.repo.save(createBookDto);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id: id });
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.repo.update(id, updateBookDto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
