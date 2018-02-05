// Carrega as variáveis apresentadas na URL (como ?page=prestart)
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

// Carrega Header, Article (content) e Footer
$(document).ready(function () {      
    $(function(){         
        $("#header").load("header.html");
        $("#footer").load("footer.html"); 
        var pageload = getUrlVars()["page"];
        if (pageload !== undefined) {
            $("#content").load("pages/" + pageload + ".html"); 
        } else {
            $("#content").load("pages/index.html"); 
        }
    });
});