const net = require('net');
const app = require('../lib/app');

const PORT = 15678;
const logFilePath = './lib/log.txt';

app.on('listen', () => {
    console.log('Server listening on PORT', PORT);
});

app.listen(PORT);
