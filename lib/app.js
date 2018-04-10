const net = require('net');
const Logger = require('./Logger');
const Client = require('./Client');

module.exports = function(logFilePath) {

    const multiClients = new Client();
    const logger = new logger(logFilePath);

    const server = net.createServer(client => {
        client.setEncoding('utf8');
        multiClients.add();

        client.on('data', data => {
            multiClients.foreach(c => c.write(data));
            logger.log(data);
        });

        client.on('close', () => {
            multiClients.remove(client);
        });
    });

return server;
};