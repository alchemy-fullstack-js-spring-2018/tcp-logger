const net = require('net');
const Clients = require('./Clients');

const clients = new Clients();

const server = net.createServer(fileLogPath => {
    fileLogPath.setEncoding('utf8');
    clients.add(fileLogPath);

    client.on('data', data => {
        clients.others(fileLogPath).forEach(c => c.write(data));
    });

    client.on('close', () => {
        clients.remove(fileLogPath);
    });

});

module.exports = server;