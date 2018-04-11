const app = require('../lib/app');
const net = require('net');
const fs = require('fs');
const assert = require('assert');
// const serverStart = require('../server');

describe('e2e test', () => {

    const PORT = 15678;

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
    
    let client2 = null;
    beforeEach(done => {
        client2 = net.connect(PORT, () => {
            client2.setEncoding('utf8');
            done();
        });
    });
    
    let client3 = null;
    beforeEach(done => {
        client3 = net.connect(PORT, () => {
            client3.setEncoding('utf8');
            done();
        });
    });
    
    
    afterEach (() => {
        app.close();
    });

    afterEach(() => {
        client1.destroy();
        client2.destroy();
        client3.destroy();
    });
    it('server is connected', () => {
        assert.equal(app.listening, true);
    });
    it('server connected and writes message', () => {

        const message = 'hello there';
        const written = client1.write(message);
        client2.write('maybe');
        assert.equal(written, true);
    });
    it('checks written messages get logged to log.txt', () => {

        const message1 = 'read me first';
        const message2 = 'read me last';

        client1.write(message1);
        client2.write(message2);
        
        let fileContents = '';
        const readStream = fs.createReadStream('log.txt', 'utf8');

        readStream.on('close', function(chunk) {  
            fileContents += chunk;
        }).on('end', function() {
            const logSplit = ('split:', fileContents.split('\n').join('').split('** '));
            const lastLog = logSplit[logSplit.length - 1];
            assert.equal(lastLog, message2);
        });
    });

});