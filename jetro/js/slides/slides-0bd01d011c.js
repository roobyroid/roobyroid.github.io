$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container.slides', {
      // Optional parameters
      navigation: {
        nextEl: '.swiper-container.slides .swiper-button-next',
        prevEl: '.swiper-container.slides .swiper-button-prev',
      },
    })
  });