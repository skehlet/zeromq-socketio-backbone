#!/usr/bin/env node

var zmq = require('zmq');
var zsock = zmq.socket('pull');
zsock.bindSync('tcp://*:3000');
console.log('ZeroMQ listening on port 3000');

var express = require('express');
var app = express.createServer();
app.use(express.static(__dirname + '/htdocs'));
app.listen(8080);
console.log('HTTP server listening at http://localhost:8080/');

//var dnode = require('dnode');
//var server = dnode({
//
//
//    zing : function (n, cb) { cb(n * 100) }
//
//
//
//});
//server.listen(app);

var io = require('socket.io').listen(app);
io.sockets.on('connection', function(client) {
  zsock.on('message', function(msg) {
    client.emit('message', msg.toString());
  });
});
