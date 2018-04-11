const server = require('../lib/app');
const net = require('net');
const assert = require('assert');

describe('E2E', () => {

    const PORT = 15677;

    beforeEach(done => {
        server.listen(PORT, done);
    });

    let client1 = null;
    const message1 = 'This lab is designed to crush your confidence!';
    beforeEach(done => {
        client1 = net.connect(PORT, () => {
            client1.setEncoding('utf8');
            client1.write(message1);
            done();
        });
    });

    let client2 = null;
    const message2 = 'I am a failure as a student.';
    beforeEach(done => {
        client2 = net.connect(PORT, () => {
            client2.setEncoding('utf8');
            client2.write(message2);
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

    // it('test', () => {
    //     const message = 'test';
        
    //     client1.on('data', received => {
    //         assert.equal(received, message);
    //     });
    //     client2.write(message);
    // });
});