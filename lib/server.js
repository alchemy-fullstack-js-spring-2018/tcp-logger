const net = require('net');
const Streams = require('./log');

let PORT = 15678;
const Stdout = new Streams;
let dataStr = '';

const server = net.createServer(client  => {
    client.setEncoding('utf8');

    console.log('client connected');
    client.write('welcome to the log');
    
    client.on('data', data => {
        let date = new Date();
        dataStr += data;
        console.log(data);
        if(/\n/.test(data)){
            Stdout.writeThe(`${date}: ${dataStr}`);
            dataStr = '';
        }
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