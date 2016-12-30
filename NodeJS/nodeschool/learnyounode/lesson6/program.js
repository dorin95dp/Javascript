var mymoduleFunction = require('./mymodule.js');

var folderName = process.argv[2];
var extension = process.argv[3];

mymoduleFunction (folderName, extension, callback);

function callback(error, files) {
  	if (error) return console.error('Error occured: ', error);

	print(files);
}

function print(files) {
  	files.forEach(function (file) {
    	console.log(file)
  	})	
}
