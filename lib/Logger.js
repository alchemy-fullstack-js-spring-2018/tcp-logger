const fs = require('fs');

module.exports = class Logger { //making my modul
    constructor(logfile) { 
        this.file = logfile;
    }
   
    log(data) {
        const message = `\n${new Date()} ** ${data.toString()}`;
        fs.appendFileSync(this.file, message);
        return message;
    }


};

