const net = require('net');

const server = net.createServer(logFilePath);

//log formats
// Mon Oct 09 2017 13: 54: 52 GMT - 0700(PDT) ** log message that was sent by the client
// Mon Oct 09 2017 13: 55: 26 GMT - 0700(PDT) ** another message sent by the client