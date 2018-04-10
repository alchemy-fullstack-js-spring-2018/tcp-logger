const net = require('net');
const Logger = require('./Logger');

const server = net.createServer(client => {
    client.on('data', data => {
        const dataDecode = data.toString('utf8');
        console.log('this is some data:', dataDecode);
    });
});

module.exports = server;