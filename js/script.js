function loadfile(filename, filetype){
    if (filetype=="js"){
        var reference=document.createElement("script")
        reference.setAttribute("type", "text/javascript")
        reference.setAttribute("src", filename)
    }
    else if (filetype=="css"){
        var reference=document.createElement("link")
        reference.setAttribute("rel", "stylesheet")
        reference.setAttribute("type", "text/css")
        reference.setAttribute("href", filename)
    }
    if (typeof reference!="undefined")
        document.getElementsByTagName("head")[0].appendChild(reference)
}
function loadutf(type) {
    var metautf=document.createElement("meta")
    metautf.setAttribute("charset", type)
}

loadfile("css/estilo.css", "css") 
loadfile("js/filtro.js", "js") 
loadfile("js/loader.js", "js") 
loadutf("UTF-8")