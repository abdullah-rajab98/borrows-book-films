import { Injectable } from '@nestjs/common';
import { CreateFilmDto, UpdateFilmDto } from '../../dtos/films.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Film } from '../../entities/films.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FilmService {
  constructor(@InjectRepository(Film) private readonly repo: Repository<Film>) { }
  async create(createFilmDto: CreateFilmDto) {
    return await this.repo.save(createFilmDto);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id: id });
  }

  update(id: number, updateFilmDto: UpdateFilmDto) {
    return this.repo.update(id, updateFilmDto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
