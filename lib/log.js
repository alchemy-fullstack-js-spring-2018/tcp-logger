const fs = require('fs');

module.exports = class Streams {

    constructor() {
        this.writeStream = fs.createWriteStream('./outFile.bmp');
        this.width = 100;
    }

    writeThe(data){
        this.writeStream.write(data);
    }
};