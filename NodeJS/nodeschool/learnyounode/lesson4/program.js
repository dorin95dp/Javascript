var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', finishedReading);

function finishedReading(error, content) {// typeof content == string
	if (error) return console.log(error);

	console.log(countNrOfNewLines(content));
}

function countNrOfNewLines(string) {
	var array = string.split('\n');

	return array.length - 1;
}
