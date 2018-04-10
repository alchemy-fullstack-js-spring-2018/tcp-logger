const app = require('../lib/app');
const net = require('net');
const assert = require('assert');


describe('E2E', () => {

    const PORT = 15678;
    const logFilePath = './log.txt';
    const server = app(logFilePath);

    beforeEach(() => {
        server.listen(PORT);
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