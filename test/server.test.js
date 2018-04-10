const assert = require('assert');
const GoServer = require('../lib/server');

describe('server', () => {
    
    it('runs server', () => {
        const testServer = new GoServer();
        testServer.serverGo();
        assert.equal(testServer.serverMessage, `TCP listening on port: ${testServer.PORT}`);
    });
});