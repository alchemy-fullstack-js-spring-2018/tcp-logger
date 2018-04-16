const app = require('../lib/app');
const assert = require('assert');
const net = require('net');
const fs = require('fs');

describe('App Tests -- E2E', () => {

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
    
    it('client writes message to log file', (done)=> {
        const message = 'Client message';
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

    



// Your tests will directly require `app.js` and start the server.
// Write a test that creates two clients and has each one write a messages to the log. You can directly inspect 
// the log files to test that log messages are being written. You'll need to parse (split) the file on new line, and then 
// split each line on ` ** ` to separate the date from the message.

// 1. Directly test the expected messages are equal
// 2. Assert that the date portion is a date (Pass the timestamp string to `const d = new Date(timestamp)` 
// and test like `isNaN(d.getTime())`. Will return `true` if **not** a date, `false` if it is a date)