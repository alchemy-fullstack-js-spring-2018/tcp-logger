const net = require('net');
const app = require('../lib/app');

const PORT = 15678;


app.on('listen', () => {
    console.log('Server listening on PORT', PORT);
});

app.listen(PORT);
