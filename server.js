const net = require('net');

module.exports = function(logFilePath /*path to where to write log file */) {
    
   

    const server = net.createServer(client => {
        client.on('data', data => {
            console.log(data, logFilePath);
        });
    });

    return server;
};