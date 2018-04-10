const net = require('net');
const fs = require('fs');
const Clients = require('./Client');

const logFilePath = 'log.txt';

const clients = new Clients();

const server = net.createServer(client /* client socket */ => {
    client.setEncoding('utf8');
    clients.add(client);

    client.on('data', data => {
        const message = data;
        fs.appendFile(logFilePath, message, (err) => {
            if(err) throw err;
        });
        clients.others(client).forEach(c => c.write(message));
    });

    client.on('close', () => {
        clients.remove(client);
    });

});

module.exports = server;
