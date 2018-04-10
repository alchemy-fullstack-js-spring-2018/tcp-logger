const app = require('../lib/app');
const net = require('net');
const assert = require('assert');


describe('E2E', () => {

    const PORT = 15677; //this will allow us to share the port

    beforeEach(done => {
        app.listen(PORT, done);
    });

    let client = null; //created client
    beforeEach(done => {
        client = net.connect(PORT, () => {
        // net.connect(PORT, socket => {
        //     client = socket;
            client.setEncoding('utf8');//this will keep us out of buffer issues
            done();
        });
    });

    afterEach(() => {
        app.close();
    });

    afterEach(() =>{
        client.destroy();
    });

    it('test connection', () => {
        const message = 'test';
        client.on('data', received =>{
            assert.equal(received, message);
            done();

        });

        client.write(message);

    });
});