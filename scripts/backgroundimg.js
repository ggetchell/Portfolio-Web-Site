function cycleImages() {
    var $active = $('#backgroundimg .active');
    var $next = ($('#backgroundimg .active').next().length > 0) ? $('#backgroundimg .active').next() : $('#backgroundimg:first');
    $next.css('z-index', 2);
        $active.fadeOut(1500,funtion() {
        $active.css('z-index', 1).show().removeClass('active');
        $next.css('z-index',3).addClass('active');
    });
}

$(window).load(function() {
    $('#backgroundimg').fadeIn(1500);
    setInterval('cycleImages()', 7000);
})