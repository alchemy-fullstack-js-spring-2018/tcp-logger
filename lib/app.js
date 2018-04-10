const net = require('net');
const Logger = require('./Logger');

module.exports = function(logFilePath) {
    const logger = new Logger(logFilePath);
    const clients = [];

    const server = net.createServer(client => {
        clients.push(client);
    
        client.on('data', data => {
            const log = logger.log(data);
            clients.forEach(c => c.write(log));
        });
    });

    return server;
};