var fs = require('fs');

function countNewLines(string) {
	var array = string.split('\n');

	return array.length - 1;		
}

path = process.argv[2];
var buffer = fs.readFileSync(path);
var content = buffer.toString();

console.log(countNewLines(content));
