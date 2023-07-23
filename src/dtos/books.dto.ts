import { ApiProperty, ApiPropertyOptional, PartialType } from "@nestjs/swagger";

export class CreateBookDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    author: string;

    @ApiProperty({ default: false })
    status: boolean
}

export class UpdateBookDto extends PartialType(CreateBookDto) { }
