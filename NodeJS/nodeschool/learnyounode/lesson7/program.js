var http = require('http');
var url = process.argv[2];

http.get(url, callback).on('error', console.error);

function callback(response) {
  	response.setEncoding('utf8');
  	response.on('data', console.log);
  	response.on('error', console.error);
}
	