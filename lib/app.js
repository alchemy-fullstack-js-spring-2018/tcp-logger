const net = require('net');
const Logger = require('./Logger');
const fs = require('fs');

const server = net.createServer((client, logFilePath) => {
    client.setEncoding('utf8');
    console.log('client connected');
    client.on('data', data => {
        const date = new Date().toString();
        const stuffToAppend = `${date}**  ${data}\n`;
        
        console.log(stuffToAppend);

        fs.appendFile('log.txt' || logFilePath, stuffToAppend, (err) => {
            if(err) throw err;
            console.log('The data was added to the log!');
        });

    });
    client.on('close', () => console.log('client left'));
});

server.on('listening', () => {
    console.log('TCP server is listening');
});

module.exports = server;