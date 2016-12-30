var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var fileLocation = process.argv[3];

var server = http.createServer(callback);

function callback (request, response) {
	response.writeHead(200, {"Content-Type": "Text/Plain"});

	fs.createReadStream(fileLocation).pipe(response);
}

server.listen(Number(port));