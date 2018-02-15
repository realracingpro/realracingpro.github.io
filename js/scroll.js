$('a[href^="#"]').on('click', function (e) {
    "use strict";
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffset - 10
    }, 500);
});

$(document).ready(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
            $("#topBtn").show(1000);
		} else {
            $("#topBtn").hide(1000);
		}
	});
});