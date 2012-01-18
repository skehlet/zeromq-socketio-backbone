# zeromq-socketio-backbone
This is a test project using [ZeroMQ](http://www.zeromq.org/) (via [node-zmq](https://github.com/JustinTulloss/zeromq.node)), [Socket.IO](http://socket.io/), and [Backbone](http://documentcloud.github.com/backbone/).

Start by launching the server.js process. This starts up an Express web server listening on 8080 as well as a ZeroMQ pull socket listening on 3000. Connect with your web browser to port 8080.

You can then run blast.js to send a string over the ZMQ socket with the current date every 1/2 second. Or run send.js to send strings from stdin directly to the browser.

In the HTML, I use Backbone to dynamically update the page whenever a Message comes down over socket.io.
