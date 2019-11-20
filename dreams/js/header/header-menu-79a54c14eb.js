$(function () {
    $('.header__menu-open').click(function () {
        $(this).css('opacity', '0');
        $('.menu-mob').animate({
            right: 0
        });
        $('body').animate({
            right: 200
        });
    });
    $('.menu-close').click(function () {
        $('.header__menu-open').css('opacity', '1');
        $('.menu-mob').animate({
            right: '-200px'
        });
        $('body').animate({
            right: 0
        });
    });
});