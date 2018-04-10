const net = require('net');
// const Logger = require('./Logger');

const server = net.createServer(client => {
    client.setEncoding('utf8');

});

module.exports = server;

// Write the core server login in `app.js`, which exports a factory function (you call it to create a server, i.e. `const server = createServer(logFilePath);`) that takes the filepath to the log file where log entries should be written. 


// You can use either use `fs.appendFile` method, or you can add the append flag to open a writable stream 
// that will append to the end of the file: `const stream = fs.createWriteStream(logFile, {'flags': 'a'});` ????
