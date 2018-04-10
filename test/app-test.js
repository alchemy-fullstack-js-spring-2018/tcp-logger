const app = require('../lib/app');
const net = require('net');
const assert = require('assert');

describe('E2E', () => {

    const PORT = 15677;

    beforeEach(done => {
        app.listen(PORT, done);
    });

    let client = null;
    beforeEach(done => {
        client = net.connect(PORT, socket => {
            client.setEncoding('utf8');
            done();
        });
    });

    afterEach(() => {
        app.close();
    });

    afterEach(() => {
        client.destroy();
    })

    it('test', () => {
        const message = 'test';
        
        client.on('data', received => {
            assert.equal(received, message);
            done();
        });
        client.write(message);
    })
})