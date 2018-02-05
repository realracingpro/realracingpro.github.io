function hideC(content){
    $("#" + content).hide();$("." + content).hide();
}
function showC(content){
    $("#" + content).show();$("." + content).show();
}

$(document).ready(function () {  
    // Mostrar/Ocultar menu
    $("#filtro_menu a").click(function () {
        var type = $(this).attr('rel');
        $("#filtro_opcoes." + type).hide();
        $("#filtro_opcoes:not(." + type + ")").show();
        $("#filtro_menu." + type).hide();
        $("#filtro_menu:not(." + type + ")").show();
        return false;
    });
    // Ocultar menu após selecionar uma opção
    $("#filtro_opcoes a").click(function () {
        var type = $(this).attr('rel');
        if (type !== 'all') {
            $("#filtro_items li." + type).show();
            $("#filtro_items li:not(." + type + ")").hide();
        } else {
            $("#filtro_items li").show();
        }
        return false;
    });
    // Mostrar resultado do filtro
    $("#filtro_opcoes a").click(function () {
        $("#filtro_opcoes.filtro_hide").hide();
        $("#filtro_menu.filtro_hide").hide();
        $("#filtro_menu.filtro_show").show();
        
        var type = $(this).attr('rel');
        if (type == 'todos') {
            showC("monza");
            showC("brands");
            showC("catalunha");
            showC("spa");
            showC("24h");
            showC("daytona");
            showC("dubai");
            showC("hongkong");
            showC("hockenheinring");
            showC("indianapolis");
            showC("lagunaseca");
            showC("melbourne");
            showC("mountpanorama");
            showC("nurburgring");
            showC("porsche");
            showC("richmond");
            showC("silverstone");
            showC("suzuka");
        } else {
            hideC("monza");
            hideC("brands");
            hideC("catalunha");
            hideC("spa");
            hideC("24h");
            hideC("daytona");
            hideC("dubai");
            hideC("hongkong");
            hideC("hockenheinring");
            hideC("indianapolis");
            hideC("lagunaseca");
            hideC("melbourne");
            hideC("mountpanorama");
            hideC("nurburgring");
            hideC("porsche");
            hideC("richmond");
            hideC("silverstone");
            hideC("suzuka");
        }
        
        if (type == 'italia') { 
            showC("monza"); 
        }
        if (type == 'inglaterra') { 
            showC("brands");
            showC("silverstone");
        }
        if (type == 'espanha') { 
            showC("catalunha"); 
        }
        if (type == 'belgica') { 
            showC("spa"); 
        }
        if (type == 'franca') { 
            showC("24h"); 
        }
        if (type == 'usa') {
            showC("daytona");
            showC("indianapolis");
            showC("lagunaseca");
            showC("richmond");
        }
        if (type == 'dubai') { 
            showC("dubai"); 
        }
        if (type == 'china') { 
            showC("hongkong"); 
        }
        if (type == 'alemanha') {
            showC("hockenheinring");
            showC("nurburgring");
            showC("porsche");
        }
        if (type == 'australia') {
            showC("melbourne");
            showC("mountpanorama");
        }
        if (type == 'japao') { 
            showC("suzuka"); 
        }
    });
});