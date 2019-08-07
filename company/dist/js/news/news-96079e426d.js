$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container.news__slider-inner', {
      // Optional parameters
      navigation: {
        nextEl: '.swiper-container.news__slider-inner .swiper-button-next',
        prevEl: '.swiper-container.news__slider-inner .swiper-button-prev',
      },
    })
  });