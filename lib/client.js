// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout

// });

// rl.prompt ();

// rl.on('line', input => {
//     console.log('received input', input);
//     rl.prompt();
// });

// setInterval(() => {
//     console.log('simulated server message');
// }, 2500;

module.exports = class Clients {
    constructor() {
        this.set = new Set();

    }
    add(client) {
        this.set.add(client);
    }
    remove(client) {
        this.set.delete(client);
    }
    others(client) {
        return [...this.set.keys().filter(c => c !==client)];
    }
};