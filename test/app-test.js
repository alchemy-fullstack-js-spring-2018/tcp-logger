const app = require('../lib/app');
const net = require('net');
const assert = require('assert');

const logFilePath = ('./lib/log.txt');


describe('E2E', () => {

    const PORT = 15677;
    const server = app(logFilePath);

    beforeEach(done => {
        server.listen(PORT, done);
    });

    let client1 = null;
    beforeEach(done => {
        client1 = net.connect(PORT, socket => {
            client1.setEncoding('utf8');
            done();
        });
    });

    let client2 = null;
    beforeEach(done => {
        client2 = net.connect(PORT, socket => {
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
    })

    it('test', () => {
        const message = 'test';
        
        client1.on('data', received => {
            assert.equal(received, message);
            done();
        });
        client2.write(message);
    })
})