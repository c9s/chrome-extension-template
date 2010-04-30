// XHR HELPERS {{{
// XXX: seperate to another js file
var XHR = {};
XHR.requestXML = function( url, options ) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url , true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
        var resp = xhr.responseXML;
        options.finish(resp);
        }
    }
};

XHR.requestJSON = function(url,options) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url , true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
        var resp = JSON.parse(xhr.responseText);
        options.finish(resp);
        }
    }
};
// }}}
