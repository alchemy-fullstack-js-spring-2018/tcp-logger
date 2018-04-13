const createServer = require('./lib/app');
// const net = require('net');
const logFilePath = './lib/captainslog.txt';


const PORT = 15678;
const server = createServer(logFilePath);
    
    
server.on('listening', () => {
    console.log('New server listening', PORT); //eslint-disable-line
});

//once client creates socket connection write to log hello.

server.listen(PORT);   

   