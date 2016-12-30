var http = require('http');
var map = require('through2-map');

var port = process.argv[2];

var server = http.createServer(callback);

function callback (request, response) {
	if (request.method !== 'POST') response.end("Please send a POST");

	request.pipe(map(function (chunk) {
		return chunk.toString().toUpperCase();
	})).pipe(response);
}

server.listen(Number(port));
