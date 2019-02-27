import {Column, Entity, ObjectIdColumn} from "typeorm";
import {ObjectId} from "bson";

@Entity()
export class Buyer {

    @ObjectIdColumn()
    id: ObjectId;

    @Column()
    firstName: string;

    @Column()
    lastName: string;
}
