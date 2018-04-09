const app = require('../lib/app');
const net = require('net');
const assert = require('assert');

describe('E2E', () => {

    const PORT = 15678;

    beforeEach(done => {
        app.listen(PORT, done);
    });

});