import { ApiProperty, ApiPropertyOptional, PartialType } from "@nestjs/swagger";
import { UserRole } from "../enums/role.enum";

export class CreateUserDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    role: UserRole;
}

export class LoginDto {
    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;
}

export class assignBookDto {
    @ApiProperty({})
    userId: number;

    @ApiProperty({})
    bookId: number;
}

export class assignFilmDto {
    @ApiProperty({})
    userId: number;

    @ApiProperty({})
    filmId: number;
}

export class UpdateUserDto extends PartialType(CreateUserDto) { }
