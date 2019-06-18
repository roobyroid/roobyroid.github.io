$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container.result', {
      // Optional parameters
      navigation: {
        nextEl: '.swiper-container.result .swiper-button-next',
        prevEl: '.swiper-container.result .swiper-button-prev',
      },
      pagination: {
        el: '.swiper-container.result .swiper-pagination',
        clickable: true
      },
    })
  });