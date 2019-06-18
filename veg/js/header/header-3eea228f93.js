$(".header__toggle").click(function(){
$(".header__toggle-nav").toggleClass("active");
});

$(".header__toggle-list-link").click(function(){
$(".header__toggle-nav").removeClass("active");
});

$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top;


    $("html,body").animate({
        scrollTop: blockOffset
    },500);
});