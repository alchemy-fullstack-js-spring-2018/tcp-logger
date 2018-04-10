const app = require('../lib/app');
const net = require('net');
const assert = require('assert');
const server = require('../server');

describe('e2e test', () => {

    const PORT = 15678;

    beforeEach(done => {
        app.listen(PORT, done);
    });

    let client1 = null;
    beforeEach(done => {
        client1 = net.connect(PORT, () => {
            client1.setEncoding('utf8');
            done();
        });
    });

    afterEach (() => {
        app.close();
    });

    afterEach(() => {
        client1.destroy();
    });

    it('server connected', () => {

    });



});