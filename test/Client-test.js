const assert = require('assert');
const Clients = require('../lib/Client');

describe('Clients', () => {

    it('gets added clients', () => {
        const clients = new Clients();
        const c1 = {};
        const c2 = {};
        clients.add(c1);
        clients.add(c2);

        const index = Clients.has([c1, c2]);
        assert.equal(index, true);

    });

});