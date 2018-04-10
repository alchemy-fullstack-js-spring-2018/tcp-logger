const makeLogServer = require('./lib/app');

const PATH = './lib/log.txt';
const PORT = 15678;

const server = makeLogServer(PATH);

server.listen(PORT);

module.exports = server;