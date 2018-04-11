const net = require('net');
const Logger = require('./Logger.js');

module.exports = function(logFilePath) {
    // const clients =[];
    // optional
    const logger = new Logger(logFilePath);

    const server = net.createServer(client => {

        // client.push(client);
        client.on('data', data => {
            // client.forEach(c => c.write(data.toString()));
            // (data, logFilePath);
            // client.write(data);
            logger.log(data.toString());
        });
    });

    return server;
};



