const Logger = require('../lib/Logger');
const assert = require('assert');
const fs = require('fs');

describe('Testing for the Logger', () => {

    let logger;
    const message = 'Test message';

    beforeEach(done => {
        logger = new Logger('./test/logger-test.txt');
        fs.truncate('./test/logger-test.txt');
        done();
    });

    it('Adds a text message to the log file', () => {
        logger.log(message);
        const result = fs.readFileSync('./test/logger-test.txt', 'utf8').split(' ** ')[1].trim('\n');
        assert.equal(message, result);
    });

});