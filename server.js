#!/usr/bin/env node

var express = require('express');
var app = express.createServer();
app.use(express.static(__dirname + '/htdocs'));
app.listen(8080);
console.log('HTTP server listening on port 8080');

var zmq = require('zmq');
var zsock = zmq.socket('pull');
zsock.bindSync('tcp://*:3000');
console.log('ZeroMQ pull socket listening on port 3000');

var io = require('socket.io').listen(app);
io.sockets.on('connection', function(client) {
  zsock.on('message', function(msg) {
    client.emit('message', msg.toString());
  });
});
