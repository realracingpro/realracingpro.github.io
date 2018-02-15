function loadfile(filename, filetype) {
    "use strict";
    var reference;
    if (filetype === "js") {
        reference = document.createElement("script");
        reference.setAttribute("type", "text/javascript");
        reference.setAttribute("src", filename);
    } else if (filetype === "css") {
        reference = document.createElement("link");
        reference.setAttribute("rel", "stylesheet");
        reference.setAttribute("type", "text/css");
        reference.setAttribute("href", filename);
    }
    if (typeof reference !== "undefined") {
        document.getElementsByTagName("head")[0].appendChild(reference);
    }
}
function loadutf(type) {
    "use strict";
    var metautf;
    metautf = document.createElement("meta");
    metautf.setAttribute("charset", type);
    if (typeof metautf !== "undefined") {
        document.getElementsByTagName("head")[0].appendChild(metautf);
    }
}

loadfile("css/estilo.css", "css");
loadfile("js/filtro.js", "js");
loadfile("js/loader.js", "js");
loadfile("js/scroll.js", "js");
loadutf("UTF-8");