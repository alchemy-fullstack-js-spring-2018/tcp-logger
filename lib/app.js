const net = require('net');
const Logger = require('./Logger');
const fs = require('fs');

const server = net.createServer((client, logFilePath) => {
    client.setEncoding('utf8');
    client.on('data', data => {
        const date = new Date().toString();
        const stuffToAppend = `${date}** ${data}\n`;

        fs.appendFile('log.txt' || logFilePath, stuffToAppend, (err) => {
            if(err) throw err;
        });

    });
    client.on('close', () => console.log('client left'));
});

server.on('listening', () => {
    console.log('TCP server is listening');
});

module.exports = server;