// open modal
var wrap = $('#page'),
  btn = $('.header__btn, .footer__btn'),
  modal = $('.modal, .modal__content'),
  close = $('#close_modal'),
  state = {
    "close": 0
  };

btn.on('click', function() {
  modal.fadeIn();
});

// close modal
$('.modal').click(function() {
  wrap.on('click', function(event) {
    var select = $('.modal__content');
    if (!$(event.target).closest(select).length && !state.close)
      modal.fadeOut();
    state.close = 0;
    $(this).unbind('click');
  });
});

close.on('click', function() {
  modal.fadeOut();
  state.close = 1;
});