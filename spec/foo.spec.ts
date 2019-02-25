import {expect} from "chai";

class Foo {
    get bar(): string {
        return 'bar'
    }
}

describe('foo', () => {
    it('should bar', () => {
        expect(new Foo().bar).to.be.equal('foo');
    });
});