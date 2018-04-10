const createServer = require('../lib/app');
const net = require('net');
const assert = require('assert');

const logFilePath = './log.txt';


describe('E2E', () => {

    const PORT = 15677;
    const server = createServer(logFilePath);


    beforeEach(done => {
        server.listen(PORT, done);
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
        server.close();
    });

    afterEach(() => {
        client1.destroy();
        client2.destroy();
    });

    it('client message is written', done => {
        const message = 'work work work';

        
        client2.on('data', received => {
            assert.equal(received, message);
            done();
        });

        client1.write('work work work');

        // client1.write(message);
    });


});