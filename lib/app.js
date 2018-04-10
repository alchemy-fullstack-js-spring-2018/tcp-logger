const net = require('net');


const server = net.createServer(client => {
    client.setEncoding('utf8');

    client.on('data', data => {
        client.write(data);
    });

});

module.exports = server;