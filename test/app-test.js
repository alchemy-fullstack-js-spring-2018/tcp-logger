const app = require('../lib/app');
const net = require('net');
const assert = require('assert');
const fs = require('fs');


describe('E2E', () => {

    const PORT = 15678;
    const logFilePath = './log.txt';
    const server = app(logFilePath);
    
    beforeEach(done => {
        server.listen(PORT, done());
        
    });
    
    let client1 = null;
    beforeEach(done => {
        client1 = net.connect(PORT, () => {
            done();
        });
    });

    let client2 = null;
    beforeEach(done => {
        client2 = net.connect(PORT, () => {
            done();
        });
    });

    afterEach(done => {
        client1.destroy();
        client2.destroy();
        server.close(done());
    });

    it('test', done => {
        client1.write('please work');
        const actual = fs.readFileSync('./log.txt');
        console.log(actual.toString());
        // assert.equal(actual, expected);
        done();
    });

});