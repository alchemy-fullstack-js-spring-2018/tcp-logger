const app = require('./lib/app');

const PORT = 15678;

app.on('listening', () => {
    console.log(`Server listening on port ${PORT}`);
    
});

app.listen(PORT);