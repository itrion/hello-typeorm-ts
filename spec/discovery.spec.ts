import "reflect-metadata";
import {Connection, createConnection} from "typeorm";
import {Buyer} from "../src/entity/Buyer";
import {expect} from "chai";
import {Contact} from "../src/entity/Contact";

describe('Discovering TypeORM features', () => {
    const firstName = "Timber";
    const lastName = "Saw";
    let connection: Connection;

    before(async () => {
        connection = await createConnection();
        await connection.dropDatabase();
    });

    after(async () => {
        await connection.close();
    });

    afterEach(async () => {
        // await connection.manager.clear(Buyer);
        // await connection.manager.clear(Contact);
    });

    it('Inserting a new buyer into the database', async () => {
        const buyer = new Buyer(firstName, lastName);

        await connection.manager.save(buyer);

        const users = await connection.manager.find(Buyer);
        expect(users.length).to.be.equal(1);
        expect(users[0].firstName).to.be.equal(firstName);
        expect(users[0].lastName).to.be.equal(lastName);
    });

    it('Inserting a one to many associate', async () => {
        let buyer = new Buyer(firstName, lastName);

        buyer.addContact(new Contact('contact1@example.com'));
        buyer.addContact(new Contact('contact2@example.com'));

        await connection.manager.save(buyer);

        let savedBuyer = await connection.manager.findOne(Buyer, buyer.id);
        let contacts = await connection.manager.find(Contact);
        expect(contacts.length).to.be.equal(2);
        expect(contacts[0].email).to.be.equal('contact1@example.com');
        expect(contacts[1].email).to.be.equal('contact2@example.com');
        expect(savedBuyer.contacts).to.not.be.undefined;
        expect(savedBuyer.contacts[0]).to.be.equal(contacts[0]);
        expect(savedBuyer.contacts[1]).to.be.equal(contacts[1]);
    });

    it('Changing associated owner');
});