const app = require('../lib/app');
const assert = require('assert');
const net = require('net');
const fs = require('fs');

describe('App Tests', () => {

    const PORT = 15677;
    const message1 = 'This is only a test';
    // const message2 = 'Do not panic';

    beforeEach(done => {
        fs.truncate('../tcp-logger/lib/log-file.txt');
        done();
    });

    beforeEach(done => {
        app.listen(PORT, done);
    });

    let client1 = null;
    beforeEach(done => {
        client1 = net.connect(PORT, () => {
            client1.setEncoding('utf8');
        });
        done();
    });
    
    // let client2 = null;
    // beforeEach(done => {
    //     client2 = net.connect(PORT, () => {
    //         client2.setEncoding('utf8');
    //     });
    //     done();
    // });
    
    afterEach(() => {
        app.close();
    });
    
    afterEach(() => {
        client1.destroy();
        // client2.destroy();
    });

    it.skip('adds a message to the logfile from client 1', () => {
        client1.write(message1);
        const result = fs.readFileSync('../tcp-logger/lib/log-file.txt', 'utf8').split(' ** ')[1];
        assert.equal(message1, result);
    });




});

    



// Your tests will directly require `app.js` and start the server.
// Write a test that creates two clients and has each one write a messages to the log. You can directly inspect 
// the log files to test that log messages are being written. You'll need to parse (split) the file on new line, and then 
// split each line on ` ** ` to separate the date from the message.

// 1. Directly test the expected messages are equal
// 2. Assert that the date portion is a date (Pass the timestamp string to `const d = new Date(timestamp)` 
// and test like `isNaN(d.getTime())`. Will return `true` if **not** a date, `false` if it is a date)