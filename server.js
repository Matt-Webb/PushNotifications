// To run this server go to the command line for this directory and run: node server.js
// note: you must have node installed.

var connect = require('connect');
var serveStatic = require('serve-static');

connect().use(serveStatic(__dirname)).listen(8080);


