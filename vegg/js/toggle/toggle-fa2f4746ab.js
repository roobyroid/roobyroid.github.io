$(function() {
	$('.header__toggle').click(function(){
		$('.header__toggle').toggleClass('active');
	});
	$('.header__toggle-list-link').click(function(){
		$('.header__toggle').removeClass('active');
	});
	});