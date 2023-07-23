import { ApiProperty, ApiPropertyOptional, PartialType } from "@nestjs/swagger";

export class CreateFilmDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    director: string

    @ApiProperty()
    status: boolean
}

export class UpdateFilmDto extends PartialType(CreateFilmDto) { }
