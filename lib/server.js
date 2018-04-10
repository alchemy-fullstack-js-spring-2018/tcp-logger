const net = require('net');

class GoServer {
    constructor() {
        this.serverMessage = null;
        this.PORT = 15678;
    }

    display() {
        console.log(this.serverMessage, this.PORT);
    }

    serverGo() {
        const server = net.createServer(clientSocket  => {
            console.log('client connected', clientSocket);
        });
        
        server.on('listen', () => {    
            try {
                this.serverMessage = 'TCP server listening on port: ';
                console.log(this.serverMessage, this.PORT);
            } catch (error) {
                this.serverMessage = 'error';
            }
        });
        
        server.listen(this.PORT);
    }
}

module.exports = GoServer;