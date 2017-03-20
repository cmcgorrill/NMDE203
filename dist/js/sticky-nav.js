var num = 260;

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.fixed').removeClass('hidden');
    } else {
        $('.fixed').addClass('hidden');
    }
});