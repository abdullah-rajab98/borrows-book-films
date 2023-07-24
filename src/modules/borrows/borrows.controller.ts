import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { BorrowsService } from './borrows.service';
import { ApiTags } from '@nestjs/swagger';
import { assignBookDto, assignFilmDto } from '../../dtos/users.dto';
import { JwtAuthGuard } from '../../guards/jwt.guard';

@ApiTags('Borrows')
@Controller('borrow')
export class BorrowController {
  constructor(private readonly borrowService: BorrowsService) { }

  @UseGuards(JwtAuthGuard)
  @Post('/book')
  async borrowBook(@Body() body: assignBookDto) {
    return await this.borrowService.borrowBook(body.userId, body.bookId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/film')
  async borrowFilm(@Body() body: assignFilmDto) {
    await this.borrowService.borrowFilm(body.userId, body.filmId);
  }
}