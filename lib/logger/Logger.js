const fs = require('fs');

module.exports = class Logger{

    constructor(logFile){
        this.logFile = logFile;
    }
    
    log(message){
        const writeStream = fs.createWriteStream(this.logFile);
        const date = new Date();
        // const editedDate = date.toLocaleDateString();
        writeStream.write(`${date} ** ${message}`);
    }
};