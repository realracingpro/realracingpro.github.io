var anim_speed = 300;
/*global $, jQuery, alert*/

function showId(id) {
    "use strict";
    $("#" + id).show(anim_speed);
}
function hideId(id) {
    "use strict";
    $("#" + id).hide(anim_speed);
}
// Mostrar/Ocultar um "content", tanto ID quanto CLASS
function hideC(content) {
    "use strict";
    $("#" + content).hide(anim_speed);
    $("." + content).hide(anim_speed);
}
function showC(content) {
    "use strict";
    $("#" + content).show(anim_speed);
    $("." + content).show(anim_speed);
}
// Inverter visualização de um id com base no rel
function hideT(id, type) {
    "use strict";
    $("#" + id + "." + type).hide(anim_speed);
    $("#" + id + ":not(." + type + ")").show(anim_speed);
}
function showT(id, type) {
    "use strict";
    $("#" + id + "." + type).show(anim_speed);
    $("#" + id + ":not(." + type + ")").hide(anim_speed);
}

$(document).ready(function () {
    "use strict";
    // Mostrar/Ocultar menu
    $("#filtro_menu a").click(function () {
        var type = $(this).attr('rel');
        hideT("filtro_opcoes", type);
        hideT("filtro_menu", type);
        return false;
    });
    // Ocultar menu após selecionar uma opção
    $("#filtro_opcoes a").click(function () {
        var type = $(this).attr('rel');
        if (type !== 'all') {
            showT("filtro_items", type);
        } else {
            showId("filtro_items li");
        }
        return false;
    });
    // Mostrar resultado do filtro
    $("#filtro_opcoes a").click(function () {
        hideId("filtro_opcoes.filtro_hide");
        hideId("filtro_menu.filtro_hide");
        showId("filtro_menu.filtro_show");
        
        var type = $(this).attr('rel');
        if (type === 'todos') {
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
        
        if (type === 'italia') {
            showC("monza");
        }
        if (type === 'inglaterra') {
            showC("brands");
            showC("silverstone");
        }
        if (type === 'espanha') {
            showC("catalunha");
        }
        if (type === 'belgica') {
            showC("spa");
        }
        if (type === 'franca') {
            showC("24h");
        }
        if (type === 'usa') {
            showC("daytona");
            showC("indianapolis");
            showC("lagunaseca");
            showC("richmond");
        }
        if (type === 'dubai') {
            showC("dubai");
        }
        if (type === 'china') {
            showC("hongkong");
        }
        if (type === 'alemanha') {
            showC("hockenheinring");
            showC("nurburgring");
            showC("porsche");
        }
        if (type === 'australia') {
            showC("melbourne");
            showC("mountpanorama");
        }
        if (type === 'japao') {
            showC("suzuka");
        }
    });
});