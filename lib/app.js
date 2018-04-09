const net = require('net');
const Logger = require('./Logger');

const server = net.createServer(client => {
    console.log(client);
});

module.exports = server;