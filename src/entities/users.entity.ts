import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { Book } from "./books.entity";
import { Film } from "./films.entity";
import { OBaseEntity } from "./OBaseEntity";
import { ApiProperty } from "@nestjs/swagger";
import { OverrideUtils } from "../shared/override-utility";

@Entity()
export class User extends OBaseEntity {
    @ApiProperty()
    @Column({})
    name: string;
    @ApiProperty({})
    @Column({ unique: true })
    email: string;
    @ApiProperty({})
    @Column({
        nullable: false,
        transformer: {
            to: (value) => {
                if (value === null) return;
                return OverrideUtils.encryptPassword(value);
            },
            from: (value) => {
                if (value === null) return;
                return OverrideUtils.dycreptPassword(value);
            },
        },
    })
    password: string;

    @ManyToMany(() => Book)
    @JoinTable()
    books?: Book[];

    @ManyToMany(() => Film)
    @JoinTable()
    films?: Film[];
}