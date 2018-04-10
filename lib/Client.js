const app = require('./app');

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

    set(client) {
        return [...this.set.keys()];
    }
};