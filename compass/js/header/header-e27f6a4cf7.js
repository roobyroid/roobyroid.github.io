$(".header__toggle").click(function(){
    $(".header__toggle-nav").toggleClass("active");
    });
    
    $(".header__toggle-link").click(function(){
    $(".header__toggle-nav").removeClass("active");
    });

    // toggle

    $(function() {
        $('.header__toggle').click(function(){
            $('.header__toggle').toggleClass('active');
        });
        $('.header__toggle-link').click(function(){
            $('.header__toggle').removeClass('active');
        });
        });