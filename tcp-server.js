const net = require('net'); 
const PORT = 15678;
const server = new net.Server(); //server is equal to establish new server.
server.on('connect', clientSocket => { //connect to server, and create socket connection.


});

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
    console.log('TCP Server listening on port', PORT);
})

server.listen(PORT);