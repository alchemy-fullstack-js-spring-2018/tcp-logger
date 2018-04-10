const net = require('net'); 

const PORT = 15678;
const server = new net.Server(client => {
    console.log('client connected!'); //eslint-disable-line
    //once client creates socket connection write to log hello.

    client.on('data', data => {
        console.log('client said', data); //eslint-disable-line
        client.write(data);
    });

    client.on('close', () => {
        console.log('client left'); // eslint-disable-line 
    }); //passes message that client has disconnected.
}); //server is equal to establish new server.


server.on('connect', () => { //connect to server, and create socket connection.


});
// my ip adress 192.168.1.69.
//.NET example code for starting client server and logging connection
// net.createServer(clientSocket => {
//     console.log('client connected');
//     c.on('end', () => {
//         console.log('client disconnected');
//     });
//     c.write('hello\r\n');
//     c.pipe(c);
// });
server.on('listening', () => {
    console.log('TCP Server listening on port', PORT); // eslint-disable-line
});

server.listen(PORT);