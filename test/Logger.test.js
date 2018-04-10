const Logger = require('../lib/Logger');
const assert = require('assert');
const fs = require('fs');

describe('Logger Tests', () => {

    let logger;
    const message = 'This is only a test';

    beforeEach(() => {
        logger = new Logger('./test/logger-test.txt');
        fs.truncate('./test/logger-test.txt');
    });

    it('Adds a message to the logFile', () => {
        logger.log(message);
        const result = fs.readFileSync('./test/logger-test.txt', 'utf8').split(' ** ')[1].trim('\n');
        assert.equal(message, result);
    });

});