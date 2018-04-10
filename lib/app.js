const net = require('net');
const Logger = require('./Logger.js');

module.exports = function (logFilePath /*path to where to write log file */) {
    const clients =[];
    // optional
    const logger = new Logger(logFilePath);

    const server = net.createServer(client => {
        
        clients.push(client);
        client.on('data', data => {

            console.log(data, logFilePath);
            client.write(data);
        });
    });

    return server;
};


