const net = require('net');
const Logger = require('./Logger');

const server = net.createServer(client => {
    client.setEncoding('utf8');
    console.log('client connected');
    client.on('data', data => {
        console.log('Data sent:', data);
    });
    client.on('close', () => console.log('client left'));
});

server.on('listening', () => {
    console.log('TCP server is listening');
});

module.exports = server;