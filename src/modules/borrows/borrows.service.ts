import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities/users.entity';
import { Repository } from 'typeorm';
import { Book } from '../../entities/books.entity';
import { Film } from '../../entities/films.entity';

@Injectable()
export class BorrowsService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(Book)
        private readonly bookRepository: Repository<Book>,
        @InjectRepository(Film)
        private readonly filmRepository: Repository<Film>,
    ) { }
    async borrowBook(userId: number, bookId: number) {
        const user = await this.userRepository.findOne({ where: { id: userId }, relations: ['books'] });
        const book = await this.bookRepository.findOne({ where: { id: bookId, status: true } });
        if (!user || !book) {
            throw new Error('User or book not found');
        }

        user.books = [...user.books, book]
        await this.userRepository.save(user);
        await this.bookRepository.update(book.id, { status: false })
        return "sussec"
    }

    async borrowFilm(userId: number, filmId: number) {
        const user = await this.userRepository.findOne({ where: { id: userId }, relations: ['films'] });
        const film = await this.filmRepository.findOne({ where: { id: filmId, status: true } });

        if (!user || !film) {
            throw new Error('User or book not found');
        }

        user.films = [...user.films, film]
        await this.userRepository.save(user);
        await this.bookRepository.update(film.id, { status: false })
        return "sussec"
    }
}
