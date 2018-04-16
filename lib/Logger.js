const fs = require('fs');

module.exports = class Logger {
    constructor(logFile){
        this.logFile = logFile;
    }

    log(message) {
        const writeStream = fs.createWriteStream(this.logFile, { flags: 'a' });
        const date = new Date();
        writeStream.write(`${date} ** ${message}\n`);
        writeStream.end();
    }
};