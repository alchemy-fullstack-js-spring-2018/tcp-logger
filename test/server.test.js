const assert = require('assert');
const Streams = require('../lib/log');
const fs = require('fs');

const Stdout = new Streams;
let dataStr = 'hello test';
let compareStr = '';

describe('server', () => {
    
    it('test input / output', () => {

        const date = new Date();
        Stdout.writeThe(`${date}: ${dataStr}`);

        let readStream = fs.createReadStream('./outFile.bmp', {
            start: 0,
            highWaterMark: 300
        });

        readStream.on('data', chunk => {
            for(let i = 0; i < chunk.length; i++){
                compareStr += chunk;
            }
        });

        readStream.on('close', () => {
            assert.equal(compareStr, `${date}: ${dataStr}`);
        });
    });

});