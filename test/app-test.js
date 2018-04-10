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

    let client = null;
    beforeEach(done => {
        client = net.connect(PORT, socket => {
            client.setEncoding('utf8');
            done();
        });
    });

    afterEach(() => {
        server.close();
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