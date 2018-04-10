const app = require('./app');
const fs = require('fs');

module.exports = class Logger {
    constructor(logfile) {
        this.logfile = logfile
     }

    log(message) {
        const newLog = `${new Date}` `${message}, says hello.`
        fs.appendFile('log.txt', message);
     }
}