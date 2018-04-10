const fs = require('fs');

module.exports = class Logger {
    constructor(logFile){
        this.logFile = logFile;
    }

    log(message) {
        const date = new Date();
        fs.appendFile(this.logFile, `${date} ** ${message}\n`, 'utf8', err => {
            if(err) throw err;
        });
    }
};