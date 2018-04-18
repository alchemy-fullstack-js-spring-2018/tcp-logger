const app = require('../lib/app');
const assert = require('assert');
const net = require('net');
const fs = require('fs');

describe('App tests', () => {

    const logFile = './test/logger-test.txt';
    const expectedLog = './test/expected-log.txt';
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
    
    it('client writes message back to log', (done)=> {
        const message = 'Hey its me';
        client1.write(message, () => {
            const expected = fs.readFileSync(expectedLog, 'utf8').split(' ** ')[1].trim('\n');
            const log = fs.readFileSync(logFile, 'utf8').split('\n')[0].split(' ** ')[1].trim('\n');
            assert.equal(expected, log);
            done();
        });
    });

    afterEach(() => {
        client1.destroy();
        app.close();
    });

});