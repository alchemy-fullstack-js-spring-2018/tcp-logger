const app = require('./app');
const fs = require('fs');

module.exports = class Logger {
    constructor(logfile) {
        this.logfile = logfile;
    }

     
    log(message) {
        const date = new Date();
        const newLog = `${date} ** ${message}`;
        fs.appendFile('log.txt', newLog);
        return message;
    }
};