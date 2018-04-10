const fs = require('fs');

module.exports = class Logger {
    constructor(logFile){
        this.logFile = logFile;
    }

    log(message) {
        const date = new Date();
        fs.appendFile(this.logfile, `${date}**${message}\n`, 'utf8', err => {
            if(err) throw err;
            console.log('data successfully written to file!');
        });
    }
};




// You can optionally create a `Logger` class that looks like:

// ```js
// class Logger {
//     constructor(logfile) { /*...*/ }
//     log(message) { /*...*/ }
// }
// ```

// And test this class first, then write a simple E2E test that makes sure everything works together.