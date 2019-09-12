$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container.blog__slides', {
      // Optional parameters
      navigation: {
        nextEl: '.swiper-container.blog__slides .swiper-button-next',
        prevEl: '.swiper-container.blog__slides .swiper-button-prev',
      },
    })
  });