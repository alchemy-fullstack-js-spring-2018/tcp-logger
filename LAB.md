TCP Logger
===

Create a TCP server that will allow clients to connect and will add each client message to a running log file.

Write the core server login in `app.js`, which exports a factory function (you call it to create a server, 
i.e. `const server = createServer(logFilePath);`) that takes the filepath to the log file where log entries should be written. 

Your tests will directly require `app.js` and start the server.

You should also have a `server.js` at the root of your project that requires and starts the server.

Log format should be:

```
Mon Oct 09 2017 13:54:52 GMT-0700 (PDT) ** log message that was sent by the client
Mon Oct 09 2017 13:55:26 GMT-0700 (PDT) ** another message sent by the client
```

Don't forget to include a newline (`\n`) after each log message!

## Testing

It's fine to just test this as an E2E system. Start the server (`server.listen(port)`) in the `before` and 
close it (`server.close()`) in an `after`.

You can optionally create a `Logger` class that looks like:

```js
class Logger {
    constructor(logfile) { /*...*/ }
    log(message) { /*...*/ }
}
```

And test this class first, then write a simple E2E test that makes sure everything works together.

In either case:

Write a test that creates two clients and has each one write a messages to the log. You can directly inspect 
the log files to test that log messages are being written. You'll need to parse (split) the file on new line, and then 
split each line on ` ** ` to separate the date from the message.

1. Directly test the expected messages are equal
2. Assert that the date portion is a date (Pass the timestamp string to `const d = new Date(timestamp)` 
and test like `isNaN(d.getTime())`. Will return `true` if **not** a date, `false` if it is a date).

## Implementation Details

You can use either use `fs.appendFile` method, or you can add the append flag to open a writable stream 
that will append to the end of the file: `const stream = fs.createWriteStream(logFile, {'flags': 'a'});`

## Rubric

* Project and Test setup: **1pts**
* E2E Tests: **3pts**
* TCP Server: **3pts**
* File append: **3pts**
