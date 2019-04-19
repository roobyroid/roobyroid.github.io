$(document).ready(function () {
    var mySwiper = new Swiper ('.slider--vacancy .slider__container', {
        loop: true,
        slidesPerView: 7,
        navigation: {
            nextEl: '.slider--vacancy .swiper-button-next',
            prevEl: '.slider--vacancy .swiper-button-prev',
        }
    })
});