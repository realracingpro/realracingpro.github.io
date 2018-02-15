$('a[href^="#"]').on('click', function (e) {
    "use strict";
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
    if (id === "#header") {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    } else {
        $('html, body').animate({
            scrollTop: targetOffset - 47
        }, 500);
    }
});

$(document).ready(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
            $("#topBtn").show(500);
		} else {
            $("#topBtn").hide(500);
		}
	});
});