const net = require('net');

const app = net.createServer(client => {
    client.setEncoding('utf8');

    client.on('data', data => {
        console.log(data);
    });

    client.on('close', () => {
        console.log('Client has left');
    });
});