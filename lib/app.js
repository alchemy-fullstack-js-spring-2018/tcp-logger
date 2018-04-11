const net = require('net');
const Client = require('./Client');
const fs = require('fs');

const multiClients = new Client;

const server = net.createServer(client => {
    client.setEncoding('utf8');
    multiClients.add();

    client.on('data', data => {
        const date = new Date();
        const message = `${date} ** ${data}\n`;
    
        fs.appendFileSync('./lib/log.txt', message, (err) => {
            if(err) throw err;
        });

    });

    return server;
});