const net = require('net');
const Logger = require('./Logger');

const server = net.createServer(client => {
    console.log('client connected');
    client.on('data', data => {
        const dataDecode = data.toString('utf8');
        console.log('Data written:', dataDecode);
    });
});

module.exports = server;