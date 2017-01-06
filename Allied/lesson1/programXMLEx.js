"use strict";

// const filePath = "official_exchange_rates.xml";
let parserXML;

function loadCurrencyViaXML() {
	let xmlDoc = getXMLSync(filePath);

	parserXML.printInTable(xmlDoc);	
}

parserXML = {
	tableHeader: "<tr>\
				  <th>Currency</th>\
				  <th>Code</th>\
				  <th>Abbr</th>\
				  <th>Rate</th>\
				  <th>Value</th>\
				  </tr>",

	printInTable: function(xmlDoc) {
		let table = this.tableHeader;
		let parentNode = xmlDoc.getElementsByTagName("Valute");
		table += this.getTableBody(parentNode); 

		document.getElementById("currencyTable").innerHTML = table;
	},

	getTableBody: function(x) {
		let tableBase = "", i = 0;

		for (i = 0; i < x.length; i++) {
			tableBase += "<tr><td>" + 
			x[i].getElementsByTagName("Name")[0].childNodes[0].nodeValue +
			"</td><td>" + 
			x[i].getElementsByTagName("NumCode")[0].childNodes[0].nodeValue +
			"</td><td>" +
			x[i].getElementsByTagName("CharCode")[0].childNodes[0].nodeValue +
			"</td><td>" +
			x[i].getElementsByTagName("Nominal")[0].childNodes[0].nodeValue +
			"</td><td>" +
			x[i].getElementsByTagName("Value")[0].childNodes[0].nodeValue +
			"</td></tr>";
		}

		return tableBase;
	}
};
