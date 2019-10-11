$(document).ready(function() {

    $(".header__btn-call").on("click", function(){
        $(".overlay").show();
    });
    $(".contacts__btn").on("click", function(){
        $(".overlay").show();
    });

    $(".popup__close").on("click", function(){
        $(".overlay").hide();
    });
});