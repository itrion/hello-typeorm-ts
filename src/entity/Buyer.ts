import {Column, Entity, ObjectID, ObjectIdColumn, OneToMany} from "typeorm";
import {Contact} from "./Contact";

@Entity()
export class Buyer {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    readonly firstName: string;

    @Column()
    readonly lastName: string;

    @OneToMany(type => Contact, contact => contact.buyer, {cascade: true})
    contacts: Contact[];

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    addContact(contact: Contact) {
        if (!this.contacts) {
            this.contacts = [];
        }
        this.contacts.push(contact);
    }
}
