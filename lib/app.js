const net = require ('net');
const makeLogServer = require('./configured-server');
//const clients = new Set();

const server = net.createServer(client)

client.on('data', data =>{
    client.write(data);
});
});

// const server = net.createServer(client => {
//     client.setEncoding('utf8');
//     clients.add(client);

//     client.write('hello to my tcp server');

//     client.on('data', data => {
//         clients.forEach(c => {
//             if(c === client) return;
//             c.write(data);
//         });
//     });
//     client.on('close', () => {
//         clients.delete(client);
//     });
// });


module.exports = server;