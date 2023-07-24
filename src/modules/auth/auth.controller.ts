import { UserService } from './../user/user.service';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto, LoginDto } from '../../dtos/users.dto';
import { JwtAuthGuard } from '../../guards/jwt.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
    private readonly userService: UserService
  ) { }

  @Post('/login')
  userLogin(@Body() user: LoginDto) {
    return this.authService.login(user);
  }

  @Post('/register')
  createUser(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }
}
