var fs = require('fs');
var path = require('path');

var extension = '.' + process.argv[3];
var folder = process.argv[2];

fs.readdir(folder, finishedReading);

function finishedReading(error, files) {
	if (error) return console.log(error);

	files.forEach( function (file) {
		if (hasRequiredExtension(file)) {
			console.log(file);			
		}
	})
}

function hasRequiredExtension(file) {
	if (process.argv[3] === undefined) return true;

	return path.extname(file) === extension;
}
