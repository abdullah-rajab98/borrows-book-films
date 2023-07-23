import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { Book } from "./books.entity";
import { Film } from "./films.entity";
import { OBaseEntity } from "./OBaseEntity";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class User extends OBaseEntity {
    @ApiProperty()
    @Column({})
    name: string;

    @ApiProperty()
    @Column({ default: false })
    status: boolean;

    @ManyToMany(() => Book)
    @JoinTable()
    books: Book[];

    @ManyToMany(() => Film)
    @JoinTable()
    films: Film[];
}