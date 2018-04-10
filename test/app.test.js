// Your tests will directly require `app.js` and start the server.
// Write a test that creates two clients and has each one write a messages to the log. You can directly inspect 
// the log files to test that log messages are being written. You'll need to parse (split) the file on new line, and then 
// split each line on ` ** ` to separate the date from the message.

// 1. Directly test the expected messages are equal
// 2. Assert that the date portion is a date (Pass the timestamp string to `const d = new Date(timestamp)` 
// and test like `isNaN(d.getTime())`. Will return `true` if **not** a date, `false` if it is a date).