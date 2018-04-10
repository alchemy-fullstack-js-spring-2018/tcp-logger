const net = require('net');

module.exports = function(logFilePath) {

    const server = net.createServer(client => {
        client.setEncoding('utf8');

        client.on('data', data => {
            console.log(data, logFilePath);
        });

    });

    return server;
};