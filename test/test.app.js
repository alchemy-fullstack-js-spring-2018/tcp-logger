
const createServer = require('../lib/app');
const net = require('net');
const assert = require('assert');
const fs = require('fs');
const logFilePath = '../captainslog.txt';

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

    // let client2 = null;
    // beforeEach(done => {
    //     client2 = net.connect(PORT, () => {
    //         client2.setEncoding('utf8');
    //         done();
    //     });
    // });

    afterEach(() => {
        server.close();
    });

    afterEach(() => {
        client1.destroy();

    });

    it.only('client message is broadcast to other clients', done => {
        const message = 'echo test';


        
        client1.write(message, () =>{
            let logData = fs.readFileSync(logFilePath);
            console.log(logData); //eslint-disable-line
            assert.equal(done);
        });
    });


});

