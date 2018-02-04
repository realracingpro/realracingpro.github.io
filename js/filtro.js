$(document).ready(function () {
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
    
    $("#filtro_opcoes a").click(function () {
        $("#filtro_opcoes.filtro_hide").hide();
        $("#filtro_menu.filtro_hide").hide();
        $("#filtro_menu.filtro_show").show();
        
        $("#monza").hide();$(".monza").hide();
        $("#brands").hide();$(".brands").hide();
        $("#catalunha").hide();$(".catalunha").hide();
        $("#spa").hide();$(".spa").hide();
        $("#24h").hide();$(".24h").hide();
        $("#daytona").hide();$(".daytona").hide();
        $("#dubai").hide();$(".dubai").hide();
        $("#hongkong").hide();$(".hongkong").hide();
        $("#hockenheinring").hide();$(".hockenheinring").hide();
        $("#indianapolis").hide();$(".indianapolis").hide();
        $("#lagunaseca").hide();$(".lagunaseca").hide();
        $("#melbourne").hide();$(".melbourne").hide();
        $("#mountpanorama").hide();$(".mountpanorama").hide();
        $("#nurburgring").hide();$(".nurburgring").hide();
        $("#porsche").hide();$(".porsche").hide();
        $("#richmond").hide();$(".richmond").hide();
        $("#silverstone").hide();$(".silverstone").hide();
        $("#suzuka").hide();$(".suzuka").hide();
        var type = $(this).attr('rel');
        
        if (type == 'all') {
            $("#monza").show();$(".monza").show();
            $("#brands").show();$(".brands").show();
            $("#catalunha").show();$(".catalunha").show();
            $("#spa").show();$(".spa").show();
            $("#24h").show();$(".24h").show();
            $("#daytona").show();$(".daytona").show();
            $("#dubai").show();$(".dubai").show();
            $("#hongkong").show();$(".hongkong").show();
            $("#hockenheinring").show();$(".hockenheinring").show();
            $("#indianapolis").show();$(".indianapolis").show();
            $("#lagunaseca").show();$(".lagunaseca").show();
            $("#melbourne").show();$(".melbourne").show();
            $("#mountpanorama").show();$(".mountpanorama").show();
            $("#nurburgring").show();$(".nurburgring").show();
            $("#porsche").show();$(".porsche").show();
            $("#richmond").show();$(".richmond").show();
            $("#silverstone").show();$(".silverstone").show();
            $("#suzuka").show();$(".suzuka").show();
        }
        if (type == 'italia') {
            $("#monza").show();$(".monza").show();            
        }
        if (type == 'inglaterra') {
            $("#brands").show();$(".brands").show();
            $("#silverstone").show();$(".silverstone").show();
        }
        if (type == 'espanha') {
            $("#catalunha").show();$(".catalunha").show();
        }
        if (type == 'belgica') {
            $("#spa").show();$(".spa").show();
        }
        if (type == 'franca') {
            $("#24h").show();$(".24h").show();
        }
        if (type == 'usa') {
            $("#daytona").show();$(".daytona").show();
            $("#indianapolis").show();$(".indianapolis").show();
            $("#lagunaseca").show();$(".lagunaseca").show();
            $("#richmond").show();$(".richmond").show();
        }
        if (type == 'dubai') {
            $("#dubai").show();$(".dubai").show();
        }
        if (type == 'china') {
            $("#hongkong").show();$(".hongkong").show();
        }
        if (type == 'alemanha') {
            $("#hockenheinring").show();$(".hockenheinring").show();
            $("#nurburgring").show();$(".nurburgring").show();
            $("#porsche").show();$(".porsche").show();
        }
        if (type == 'australia') {
            $("#melbourne").show();$(".melbourne").show();
            $("#mountpanorama").show();$(".mountpanorama").show();
        }
        if (type == 'japao') {
            $("#suzuka").show();$(".suzuka").show();
        }
    });

    $("#filtro_menu a").click(function () {
        var type = $(this).attr('rel');
        $("#filtro_opcoes." + type).hide();
        $("#filtro_opcoes:not(." + type + ")").show();
        $("#filtro_menu." + type).hide();
        $("#filtro_menu:not(." + type + ")").show();
        return false;
    });
});
