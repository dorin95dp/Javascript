// Solutions and the conditions: 
// https://github.com/workshopper/learnyounode/tree/master/exercises

var http = require('http');
var url = require('url');

var port = process.argv[2];
var hasParsetime = /^\/api\/parsetime/;
var hasUnixtime = /^\/api\/unixtime/;

var server = http.createServer(callback);

function callback (request, response) {
    var parsedUrl = url.parse(request.url, true);
    var time = new Date(parsedUrl.query.iso);
    var result;

    if (hasParsetime.test(request.url)) {
        result = parsetime(time);
    } else if (hasUnixtime.test(request.url)) {
      result = unixtime(time);
    }

    if (result) {
        response.writeHead(200, { "Content-Type": "application/json"});
        response.end(JSON.stringify(result));
    } else {
      response.writeHead(404);
      response.end();
    }
}

function parsetime (time) {
    return {  hour: time.getHours(),
              minute: time.getMinutes(),
              second: time.getSeconds()
    }
}

function unixtime (time) {
  return { unixtime: time.getTime() }
}

server.listen(Number(port));