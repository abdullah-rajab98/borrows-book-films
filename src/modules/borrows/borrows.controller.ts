import { Controller, Post, Body } from '@nestjs/common';
import { BorrowsService } from './borrows.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Borrows')
@Controller('borrow')
export class BorrowController {
  constructor(private readonly borrowService: BorrowsService) { }

  @Post('/book')
  async borrowBook(@Body() body): Promise<void> {
    await this.borrowService.borrowBook(body.userId, body.bookId);
  }

  @Post('/film')
  async borrowFilm(@Body() body): Promise<void> {
    await this.borrowService.borrowFilm(body.userId, body.filmId);
  }
}