$('a[href^="#"]').on('click', function (e) {
    "use strict";
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffset - 10
    }, 500);
});