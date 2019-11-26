var swiper = new Swiper('.swiper-container.honeymoon__slider', {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    speed: 800,
    pagination: {
      el: '.swiper-container.honeymoon__slider .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
        // when window width is >= 1860px
        770: {
          slidesPerView: 1.2,
          spaceBetween: 10
        },
        // when window width is >= 1860px
        1100: {
          slidesPerView: 1.8,
          spaceBetween: 10
        },
        1440: {
          slidesPerView: 2.3,
          spaceBetween: 20
        },
        // when window width is >= 1860px
        1550: {
          slidesPerView: 2.5,
          spaceBetween: 30
        },
        // when window width is >= 1860px
        1862: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
  });