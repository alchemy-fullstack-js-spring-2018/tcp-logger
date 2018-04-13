const net = require('net');
const Streams = require('./log');

let PORT = 15678;
const Stdout = new Streams;
let dataStr = '';

const server = net.createServer(client  => {
    client.setEncoding('utf8');

    console.log('client connected'); //eslint-disable-line
    client.write('welcome to the log');
    
    client.on('data', data => {
        let date = new Date();
        dataStr += data;
        if(/\n/.test(data)){
            Stdout.writeThe(`${date}: ${dataStr}`);
            dataStr = '';
        }
    });
    
    client.on('close', () => {
        console.log('client left'); //eslint-disable-line
        server.close();
    });
    
});

server.on('listening', () => {    
    console.log('TCP server listening on port: ', PORT); //eslint-disable-line
});


server.listen(PORT);