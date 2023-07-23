import { ApiProperty, ApiPropertyOptional, PartialType } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty()
    name: string;

    @ApiProperty({ default: false })
    status: boolean
}

export class UpdateUserDto extends PartialType(CreateUserDto) { }
