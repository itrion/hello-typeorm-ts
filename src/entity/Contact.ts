import {Column, Entity, ManyToOne, ObjectID, ObjectIdColumn} from "typeorm";
import {Buyer} from "./Buyer";

@Entity()
export class Contact {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    readonly email: string;

    @ManyToOne(type => Buyer, buyer => buyer.contacts)
    buyer: Buyer;

    constructor(email: string) {
        this.email = email;
    }

    toString(): string {
        return `Contact{id: ${this.id}, email: ${this.email}`
    }
}