const fs = require('fs');

module.exports = class Logger {
    constructor(logfile) {
        this.file = logfile;
    }

    log(data) { 
        const message = `\n${new Date()} ** ${data.toString()}`;
        fs.appendFileSync('./lib/log.txt', message, (err) => {
            if(err) throw err;
        });
        return message;
    }
};