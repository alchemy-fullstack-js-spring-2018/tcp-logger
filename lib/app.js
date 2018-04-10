const net = require('net');
const Logger = require('./Logger');


module.exports = function(logFilePath) {
    const clients = [];
    const logger = new Logger(logFilePath);

    const server = net.createServer(client => {

        clients.push(client);

        client.on('data', data => {
            clients.forEach(c => c.write(data.toString()));
            logger.log(data.toString());
        });
    });

    return server;
};