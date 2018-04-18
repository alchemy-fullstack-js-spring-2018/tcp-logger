const assert = require('assert');
const Clients = require('../lib/Client');

describe('Clients', () => {

    it('gets the clients', () => {
        const clients = new Clients();
        const c1 = {};
        const c2 = {};
        clients.add(c1);
        clients.add(c2);
    
        const all = clients.all();
        assert.deepEqual(all, [c1, c2]);
    });
});