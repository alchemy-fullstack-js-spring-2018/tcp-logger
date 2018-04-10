const app = require('./lib/app');
const makeLogServer = require('./configured-server');
const net = require('net');

const PATH = './log.txt';
const PORT = 30078;

app.on('listening', () => {
    console.log('TCP Server listening on port', PORT);
});


app.listen(PORT);



module.exports = function(logFilePath){
    
    const server = net.createServer(client => {
        client.on('data', data => {
            console.log(data, logFilePath);
        });
    });
};


//const server = makeLogServer(PATH);

