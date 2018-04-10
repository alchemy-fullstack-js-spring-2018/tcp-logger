// const app = require('../lib/app');
const server = require('../server');
const net = require('net');
const assert = require('assert');

describe('E2E', () => {

    const PORT = 15678;

    let client1 = null;
    beforeEach(done => {
        client1 = net.connect(PORT, () => {
            client1.setEncoding('utf8');
            done();
        });
    });

    let client2 = null;
    beforeEach(done => {
        client2 = net.connect(PORT, () => {
            client2.setEncoding('utf8');
            done();
        });
    });

    afterEach(() => {
        server.close();
    });

    afterEach(() => {
        client1.destroy();
        client2.destroy();
    });

    it('This is ckecking the server connection', done => {
        const message = 'This is checking the server';
        const date = new Date();
        const loggedMessage = `\n${date} ** ${message} sent by the client`;
        client2.on('data', received => {
            assert.equal(received, loggedMessage);
            done();
        });
        client1.write(message);
    });
});