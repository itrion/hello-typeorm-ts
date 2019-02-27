import {Column, Entity, ObjectID, ObjectIdColumn, OneToMany} from "typeorm";

@Entity()
export class Buyer {
    @ObjectIdColumn()
    id: ObjectID;


    @Column()
    firstName: string;

    @Column()
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
