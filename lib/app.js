// Write the core server login in `app.js`, which exports a factory function (you call it to create a server, i.e. `const server = createServer(logFilePath);`) that takes the filepath to the log file where log entries should be written. 
// Log format should be:

// ```
// Mon Oct 09 2017 13:54:52 GMT-0700 (PDT) ** log message that was sent by the client
// Mon Oct 09 2017 13:55:26 GMT-0700 (PDT) ** another message sent by the client
// ```

// Don\'t forget to include a newline (`\n`) after each log message!

// You can use either use `fs.appendFile` method, or you can add the append flag to open a writable stream 
// that will append to the end of the file: `const stream = fs.createWriteStream(logFile, {'flags': 'a'});`
