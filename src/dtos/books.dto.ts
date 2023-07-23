import { ApiProperty, ApiPropertyOptional, PartialType } from "@nestjs/swagger";

export class CreateBookDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    author: string;
}

export class UpdateBookDto extends PartialType(CreateBookDto) { }
