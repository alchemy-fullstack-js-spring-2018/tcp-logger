const net = require('net');
const Logger = require('./Logger');

const server = net.createServer(client => {
    client.on('data');
});

module.exports = server;