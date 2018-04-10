const assert = require('assert');
const fs = require('fs');
const Logger = require('../lib/Logger');

describe('Logger', () => {    

    const logger = new Logger('./log.txt');

    it('takes a message and returns a formatted log', () => {
        const message = 'Hello World!';
        const log = logger.log(message);

        const date = new Date();
        const expected = `\n${date} ** ${message} sent by the client`;
        assert.equal(expected, log);
    });

    it('check the file path', () => {
        const message = 'Thit is testing the path!';
        logger.log(message);

        const loggedFile = fs.readFileSync(`./lib/${logger.logfile}`);

        const expected = fs.readFileSync('./lib/log.txt');
        assert.deepEqual(expected, loggedFile);
    });

    it('check the last line of content', () => {
        const message = 'Last Line of content';
        const log = logger.log(message).split('\n');

        const expected = fs.readFileSync('./lib/log.txt', 'utf8').split('\n');
        assert.deepEqual(expected[expected.length - 1], log[1]);
    });
});