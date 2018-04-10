const Logger = require('../lib/Logger');
const assert = require('assert');
const fs = require('fs');

const logFilePath = './lib/log.txt';


describe('Logger', () => {

    let logger;
    beforeEach(() => {
        logger = new Logger(logFilePath);
    });

    it('check logger log file', () => {

        const result = logger.file;
        assert.deepEqual(result, logFilePath);

    });

    it('check logger log format', () => {

        const message = 'this is a froggy style test';
        const result = logger.log(message);

        assert.deepEqual(result, `\n${new Date()} ** ${message.toString()}`);

    });

    it('message is last logged', done => {

        const message = 'i am the last';
        const expected = logger.log(message).split('\n');

        const data = fs.readFileSync(logFilePath, 'utf8').split('\n');
        assert.deepEqual(data[data.length - 1], expected[1]);

        done();
    });
});