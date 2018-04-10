const net = require('net');
const fs = require('fs');

module.exports = function(logFilePath) {

    const server = net.createServer(client => {
        client.setEncoding('utf8');
        const log = logFilePath;

        client.on('data', data => {
            fs.appendFile(log, data, (err) => {
                if(err) throw err;
                console.log('The "data to append" was appended to file!');
            });
        });

    });

    return server;
};