$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container.reviews', {
      // Optional parameters
      navigation: {
        nextEl: '.swiper-container.reviews .swiper-button-next',
        prevEl: '.swiper-container.reviews .swiper-button-prev',
      },
      pagination: {
        el: '.swiper-container.reviews .swiper-pagination',
        clickable: true
      },
    })
  });