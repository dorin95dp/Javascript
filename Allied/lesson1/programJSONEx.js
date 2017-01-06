"use strict";

const filePath = "official_exchange_rates.xml";
let parserJSON;

function loadCurrencyViaJSON() {
	let xmlDoc = getXMLSync(filePath);
	let json = xmlToJson(xmlDoc);

	parserJSON.printInTable(json);	
}

parserJSON = {
	tableHeader: "<tr>\
				  <th>Currency</th>\
				  <th>Code</th>\
				  <th>Abbr</th>\
				  <th>Rate</th>\
				  <th>Value</th>\
				  </tr>",

	printInTable: function(json) {
		let table = this.tableHeader;
		let parentObj = json.ValCurs.Valute;
		table += this.getTableBody(parentObj); 

		document.getElementById("currencyTable").innerHTML = table;
	},

	getTableBody: function(parentObj) {
		let tableBase = "", i = 0;
		for (i = 0; i < parentObj.length; i++) {
			tableBase += "<tr><td>" + 
						  parentObj[i].Name["#text"] +
						  "</td><td>" + 
						  parentObj[i].NumCode["#text"] +
						  "</td><td>" +
						  parentObj[i].CharCode["#text"] +
						  "</td><td>" +
						  parentObj[i].Nominal["#text"] +
						  "</td><td>" +
			              parentObj[i].Value["#text"] +
			              "</td></tr>";
		}

		return tableBase;
	}
};


