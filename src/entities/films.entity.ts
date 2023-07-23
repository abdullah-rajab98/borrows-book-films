import { Column, Entity, ManyToMany } from "typeorm";
import { User } from "./users.entity";
import { OBaseEntity } from "./OBaseEntity";

@Entity()
export class Film extends OBaseEntity {
    @Column()
    title: string;

    @Column()
    director: string;

    @Column()
    status: boolean;

    @ManyToMany(() => User, user => user.films)
    users: User[];
}