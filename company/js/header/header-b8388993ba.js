$(document).ready(function(){
    var $hamburger = $(".hamburger");
     $hamburger.on("click", function(e) {
       $hamburger.toggleClass("is-active");
    });

    $hamburger.on("click",function(){
        $(".header__menu ul").slideToggle();
    });
});