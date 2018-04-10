const logger = require('../lib/logger');
const assert = require('assert');

describe('logging message', () => {
    it('log test', () => {
        assert.equal(logger('test'), 'test');
    });


});

