import { ApiProperty, ApiPropertyOptional, PartialType } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty()
    name: string;

    @ApiProperty({ default: false })
    status: boolean
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
