const app = require('../lib/app');
const net = require('net');
const readFrom = require('../lib/read-from');


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

    
    beforeEach(done => {
        client1.write('please work', done());
    });

    beforeEach(done => {
        client2.write('i can hear you', done());
    });

    afterEach(done => {
        client1.destroy();
        client2.destroy();
        server.close(done());
    });

    it('test', () => {
        return readFrom('./log.txt', 112)
            .then(buffer => {
                console.log(buffer);
            });
            
    });

});