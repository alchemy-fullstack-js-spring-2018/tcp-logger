const app = require('../lib/app');
const net = require('net');
const readFrom = require('../lib/read-from');
const assert = require('assert');


describe('E2E', () => {

    const PORT = 15677;
    const server = app('./log.txt');
    
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

    it('Log is recording client data', () => {
        
        server.on('close', () => {
            return readFrom('./log.txt', 112)
                .then(buffer => {
                    const log = buffer.toString('utf8');
                    const lines = log.split('\n');
                    const dateAndMsg1 = lines[0].split('**');
                    const dateAndMsg2 = lines[1].split('**');
                    const date1 = new Date(dateAndMsg1[0]);
                    const date2 = new Date(dateAndMsg2[0]);
                    assert.ok(!isNaN(date1.getTime()));
                    assert.ok(!isNaN(date2.getTime()));
                    assert.equal(dateAndMsg1[1], ' please work');
                    assert.equal(dateAndMsg2[1], ' i can hear you');
                });
        });
        
        client1.write('please work'); 
        client2.write('i can hear you');
    
    });
});