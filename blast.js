#!/usr/bin/env node

var zmq = require('zmq')
  , sock = zmq.socket('push');

sock.connect('tcp://127.0.0.1:3000');
console.log('Blaster connected to remote port 3000');

setInterval(function(){
  var msg = (new Date()).toString();
  console.log('sending:', msg);
  sock.send(msg);
}, 500);

