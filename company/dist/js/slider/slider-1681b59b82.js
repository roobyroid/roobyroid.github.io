$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container.slider__inner', {
      // Optional parameters
      navigation: {
        nextEl: '.swiper-container.slider__inner .swiper-button-next',
        prevEl: '.swiper-container.slider__inner .swiper-button-prev',
      },
      pagination: {
        el: '.swiper-container.slider__inner .swiper-pagination',
        clickable: true
      },
    })
  });