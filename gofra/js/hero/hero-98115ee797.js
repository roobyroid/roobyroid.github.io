$('.slider--for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    infinite: true,
    asNavFor: '.slider--nav',
  });
  $('.slider--nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider--for',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });