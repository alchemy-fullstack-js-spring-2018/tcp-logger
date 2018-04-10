const app = require('../lib/app');
const fs = require('fs');
const net = require('net');
const assert = require('assert');

describe('E2E', () => {

    const PORT = 15677;

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

    let client2 = null;
    beforeEach(done => {
        client2 = net.connect(PORT, () => {
            client2.setEncoding('utf8');
            done();
        });
    });

    afterEach(() => {
        app.close();
    });

    afterEach(() => {
        client1.destroy();
        client2.destroy();
    });

    it('client message is broadcast to other clients', done => {
        const message = 'Hello';
        const date = new Date('October 9, 2017 13:54:52 GMT-0700 (PDT)');
 
        client2.on('data', received => {
            assert.equal(received, `\n${date} ${message}`);
            done();
        });

        client1.write(`\n${date} ${message}`);
    });

    it('client message is broadcast to other clients', done => {
        const message = 'Hello again';
        const date = new Date('October 9, 2017 13:55:26 GMT-0700 (PDT)');

        client1.on('data', received => {
            assert.equal(received, `\n${date} ${message}`);
            done();
        });

        client2.write(`\n${date} ${message}`);
    });
});
