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
    async borrowBook(userId: number, bookId: number): Promise<void> {
        const user = await this.userRepository.findOneBy({ id: userId });
        const book = await this.bookRepository.findOneBy({ id: bookId });

        if (!user || !book) {
            throw new Error('User or book not found');
        }

        if (book.status == false) {
            throw new Error('Book is not available');
        }

        user.books.push(book);
        book.users.push(user);

        await this.userRepository.save(user);
        await this.bookRepository.save(book);
    }

    async borrowFilm(userId: number, filmId: number): Promise<void> {
        const user = await this.userRepository.findOneBy({ id: userId });
        const film = await this.filmRepository.findOneBy({ id: filmId });

        if (!user || !film) {
            throw new Error('User or book not found');
        }

        if (film.status == false) {
            throw new Error('Book is not available');
        }

        user.films.push(film);
        film.users.push(user);

        await this.userRepository.save(user);
        await this.filmRepository.save(film);
    }
}
