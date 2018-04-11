
module.exports = class Client {
    constructor() {
        this.set = new Set();
    }

    add(client) {
        this.set.add(client);
    }

    remove(client) {
        this.set.delete(client);
    }

    setAll() {
        return [...this.set.keys()];
    }
};