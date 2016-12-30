var fs = require('fs');
var path = require('path');

module.exports = function (folderName, extension, callback) {
  	fs.readdir(folderName, function (error, files) {
    	if (error) return callback(error);

    	files = files.filter(function (file) {
      		return hasRequiredExtension(file, extension);
    	})

    	callback(null, files);
  	})
}

function hasRequiredExtension(file, extension) {
	if (extension === undefined) return true;

	return path.extname(file) === '.' + extension;
}
