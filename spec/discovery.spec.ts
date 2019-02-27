import "reflect-metadata";
import {Connection, createConnection} from "typeorm";
import {Buyer} from "../src/entity/Buyer";

describe('Discovering TypeORM features', () => {
    let connection: Connection;

    before(async () => {
        connection = await createConnection();
    });

    after(async () => {
        await connection.close();
    });

    it('Inserting a new buyer into the database', async () => {
        const buyer = new Buyer();
        buyer.firstName = "Timber";
        buyer.lastName = "Saw";
        await connection.manager.save(buyer);
        console.log("Saved a new user with id: " + buyer.id);

        console.log("Loading users from the database...");
        const users = await connection.manager.find(Buyer);
        console.log("Loaded users: ", users);

        console.log("Here you can setup and run express/koa/any other framework.");
    });
});