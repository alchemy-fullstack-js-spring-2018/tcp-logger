const app = require('../lib/app');
const net = require('net');
const assert = require('assert');


describe('E2E', () => {

    const PORT = 15678;
    const logFilePath = './log.txt';
    const server = app(logFilePath);
    let client1 = null;
    
    beforeEach(done => {
        server.listen(PORT);
        client1 = net.connect(PORT, () => {
            done();
        });
    });

    afterEach(() => {
        server.close();
        client1.destroy();
    });

    it('test', () => {
        client1.write('please work');
    });

});