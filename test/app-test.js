const app = require('../lib/app');
const net = require('net');
const assert = require('assert');


describe('E2E', () => {

    const PORT = 15677;
    const logFilePath = './log.txt';
    const server = app(logFilePath);

    beforeEach(done => {
        server.listen(PORT, done);
    });

    let client1 = null;
    beforeEach(done => {
        client1 = net.connect(PORT, () => {
            client1.write('please work');
            done();
        });
    });

    afterEach(() => {
        server.close();
    });

    afterEach(() => {
        client1.destroy();
    });

    it('test', () => {
        console.log('got here');
    });

});