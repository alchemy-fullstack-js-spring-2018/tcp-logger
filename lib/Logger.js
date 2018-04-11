const fs = require('fs');

module.exports = class Logger { //making my modul
    constructor(logfile) { 
        this.file = logfile;
    }
   
    log(data) {
        const message = `\n${new Date()} ** ${data.toString()}`;
        const magicStream = fs.createWriteStream(this.file, { 'flags': 'a' });
        console.log('this is my file path', this.file);//eslint-disable-line
        magicStream.write(message);
        return message;
    }


};

