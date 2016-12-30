var http = require('http');
var bl = require('bl');

var url = process.argv[2];

http.get(url, function (response) {
	response.pipe(bl(callback));
});

function callback(error, data) {
	if (error) return console.error(error);

    data = data.toString();
    console.log(data.length);
    console.log(data);
}
