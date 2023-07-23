import { ApiProperty, ApiPropertyOptional, PartialType } from "@nestjs/swagger";

export class CreateFilmDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    director: string
}

export class UpdateFilmDto extends PartialType(CreateFilmDto) { }
