// HTTP Portion
var http = require('http');
var fs = require('fs'); // Using the filesystem module
var httpServer = http.createServer(requestHandler);
var url = require('url');
var current_question = 0;

httpServer.listen(8080);

function requestHandler(req, res) {

	var parsedUrl = url.parse(req.url);
	console.log("The Request is: " + parsedUrl.pathname);

	fs.readFile(__dirname + parsedUrl.pathname,
		// Callback function for reading
		function (err, data) {
			// if there is an error
			if (err) {
				res.writeHead(500);
				return res.end('Error loading ' + parsedUrl.pathname);
			}
			// Otherwise, send the data, the contents of the file
			res.writeHead(200);
			res.end(data);
  		}
  	);

  	/*
  	res.writeHead(200);
  	res.end("Life is wonderful");
  	*/
}


// WebSocket Portion
// WebSockets work with the HTTP server
var io = require('socket.io').listen(httpServer);

// Register a callback function to run when we have an individual connection
// This is run for each individual user that connects
io.sockets.on('connection',
	// We are given a websocket object in our function
	function (socket) {

		console.log("We have a new client: " + socket.id);

		socket.on('micCheck', function(data) {
			console.log("Mic Check " + data);
		});

		socket.on('allColors', function(){
			console.log("You pressed the spacebar!");
			io.sockets.emit('allColors');

		});

		// socket.on('history', function() {
		// 	io.socket.emit('currentQuestion', current_question);
		// });


		// When this user emits, client side: socket.emit('otherevent',some data);
		socket.on('currentQuestion', function(data) {
			// Data comes in as whatever was sent, including objects
			console.log("Received: The question is:  " + data);

			// Send it to all of the clients
			// socket.broadcast.emit('currentQuestion', data);
			io.sockets.emit('currentQuestion', data);
			current_question = data;

		});


		socket.on('disconnect', function() {
			console.log("Client has disconnected " + socket.id);
		});
	}
);
