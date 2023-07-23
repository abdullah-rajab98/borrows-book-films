import { Module } from '@nestjs/common';
import { BorrowsService } from './borrows.service';
import { BorrowController } from './borrows.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../entities/users.entity';
import { Film } from '../../entities/films.entity';
import { Book } from '../../entities/books.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Film, Book])],
  controllers: [BorrowController],
  providers: [BorrowsService]
})
export class BorrowsModule { }
