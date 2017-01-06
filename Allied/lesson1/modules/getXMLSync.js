function getXMLSync(filePath) {
	
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", filePath, false);
	xmlhttp.send();

	return xmlhttp.responseXML;
}
