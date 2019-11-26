var swiper = new Swiper('.swiper-container.popular__slides', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-container.popular__slides .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 480px
      770: {
        slidesPerView: 2,
      },
      // when window width is >= 640px
      1140: {
        slidesPerView: 3,
      }
    }
  });

var swiper = new Swiper('.swiper-container.popular__most', {
  speed: 800,
  navigation: {
    nextEl: '.popular__most-btn-next',
    prevEl: '.popular__most-btn-prev',
  },
  pagination: {
    el: '.swiper-container.popular__most .swiper-pagination',
    clickable: true,
  },
  
});