new WOW().init();

$(function() {

    var top = $("#top"),
        firstH = $("#first").innerHeight(),
        scrollOffset = $(window).scrollTop();


        /* Fixed Top */
        checkScroll(scrollOffset);

    $(window).on("scroll",function() {
        scrollOffset = $(this).scrollTop();
    
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        

        if ( scrollOffset >= firstH ) {
            top.addClass("fixed");
        } else {
            top.removeClass("fixed");
        }
    
    }

    /* Smoth scroll */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");


        $("html,body").animate({
            scrollTop: blockOffset
        },500);
    });
});