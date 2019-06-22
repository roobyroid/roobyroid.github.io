$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container.reviews', {
      // Optional parameters
      pagination: {
        el: '.swiper-container.reviews .swiper-pagination',
        clickable: true
      },
    })
  });