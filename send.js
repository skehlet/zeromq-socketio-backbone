#!/usr/bin/env node

var host = process.argv[2] || 'localhost';
var port = process.argv[3] || 3000;

var zmq = require('zmq')
  , sock = zmq.socket('push');

sock.connect('tcp://' + host + ':' + port);
console.log('Connected to ' + host + ':' + port + '. Ctrl-d to exit.');

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
  sock.send(chunk.trim());
});
process.stdin.on('end', function() {
  sock.close();
});
