import "reflect-metadata";
import {Connection, createConnection} from "typeorm";
import {Buyer} from "../src/entity/Buyer";
import {expect} from "chai";

describe('Discovering TypeORM features', () => {
    const firstName = "Timber";
    const lastName = "Saw";
    let connection: Connection;

    before(async () => {
        connection = await createConnection();
    });

    after(async () => {
        await connection.close();
    });

    afterEach(async () => {
        await connection.manager.clear(Buyer);
    });

    it('Inserting a new buyer into the database', async () => {
        const buyer = new Buyer(firstName, lastName);

        await connection.manager.save(buyer);

        const users = await connection.manager.find(Buyer);
        expect(users.length).to.be.equal(1);
        expect(users[0].firstName).to.be.equal(firstName);
        expect(users[0].lastName).to.be.equal(lastName);
    });
});