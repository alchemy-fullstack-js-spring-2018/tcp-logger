const net = require('net');
const streamThe = require('./log');

let PORT = 15678;

const server = net.createServer(client  => {
    client.setEncoding('utf8');
    
    console.log('client connected');
    client.write('welcome to the log');

    client.on('data', data => {
        streamThe(data);
        console.log(data);
    });

    client.on('close', () => {
        console.log('client left');
        server.close();
    });
});
            
server.on('listening', () => {    
    console.log('TCP server listening on port: ', PORT);
});

server.listen(PORT);