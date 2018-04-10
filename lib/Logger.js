const fs = require('fs');

module.exports = class Logger {
    constructor(logfile) {
        this.file = logfile;
    }

    log(data) { 
        const message = data.toString();

        fs.writeFileSync(this.file, message);

        console.log(`Logged: ${message}`);
    }
};