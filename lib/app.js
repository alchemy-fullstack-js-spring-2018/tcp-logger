const net = require('net');
const Logger = require('./Logger');

const createServer = (logFilePath) => {
    return net.createServer(client => {
        client.setEncoding('utf8');
        const logger = new Logger(logFilePath);
        client.on('data', data => {
            logger.log(data);
        });
    });
};

const server = createServer('./lib/log-file.txt');

module.exports = server;
