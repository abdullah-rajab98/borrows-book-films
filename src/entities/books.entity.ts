import { Column, Entity, ManyToMany } from "typeorm";
import { User } from "./users.entity";
import { OBaseEntity } from "./OBaseEntity";

@Entity()
export class Book extends OBaseEntity {
    @Column()
    title: string;

    @Column()
    author: string;

    @Column({ default: true })
    status: boolean;

    @ManyToMany(() => User, user => user.books)
    users: User[];
}
