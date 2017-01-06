function xmlToJson(xml) {
    
    // Create the return jsonect
    var json = {};

    if (xml.nodeType == 1) { // element
        // do attributes
        if (xml.attributes.length > 0) {
        json["@attributes"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
                var attribute = xml.attributes.item(j);
                json["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
        }
    } else if (xml.nodeType == 3) { // text
        json = xml.nodeValue;
    }

    // do children
    if (xml.hasChildNodes()) {
        for(var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if (typeof(json[nodeName]) == "undefined") {
                json[nodeName] = xmlToJson(item);
            } else {
                if (typeof(json[nodeName].push) == "undefined") {
                    var old = json[nodeName];
                    json[nodeName] = [];
                    json[nodeName].push(old);
                }
                json[nodeName].push(xmlToJson(item));
            }
        }
    }
    return json;
}
