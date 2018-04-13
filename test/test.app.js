
const app = require('../lib/app');
const net = require('net');
const assert = require('assert');
const fs = require('fs');
const logFilePath = './lib/captainslog.txt';

describe('E2E', () => {

    const PORT = 15677;
    const server = app(logFilePath);

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

    it.only('client message is logged', done => {
        const message = 'echo test';


        
        client1.on('data', () =>{
            let logData = fs.readFileSync(logFilePath)
                .toString()
                .split('\n')
                .pop();
                // .split(' ** ')[1];
            console.log(logData); //eslint-disable-line
            assert.ok(logData, `\n${ new Date() } ** ${message}`); 
            done();
        });
        done();
        client1.write(message);
    });


});

