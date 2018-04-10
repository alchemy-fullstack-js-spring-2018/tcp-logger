const net = require('net');
const Logger = require('./Logger');

const server = net.createServer(client => {
    client.on('data', data => {
        console.log('this is some data:', data);
    });
});

module.exports = server;