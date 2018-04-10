const createServer = require('./lib/app');
const logFilePath = './lib/log.txt';

const server = createServer(logFilePath);

const PORT = 15678;

server.on('listening', () => {
    console.log('New server looking for love on port', PORT); //eslint-disable-line
});

server.listen(PORT);