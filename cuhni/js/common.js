//menuscroll
$(function () {
    $("a.scr[href*=#]:not([href=#])").click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = $(this.hash);
            if (e = e.length ? e : $("[name=" + this.hash.slice(1) + "]"), e.length) return $("html,body").animate({
                scrollTop: e.offset().top -50
            }, "slow"),$(".menu").removeClass("mshow"), !1
        };
        
    })
});
//menu animate
var a=$("nav").height();
var t = $("nav");
$(window).scroll(function() {
            if ($(this).scrollTop() > a && t.hasClass("hiden")) {
                t.removeClass("hiden").addClass("shown");
            } else if ($(this).scrollTop() <= a && t.hasClass("shown")) {
                t.removeClass("shown").addClass("hiden");
            }
});
//menu adaptiv

$(".menu").click(function(){
    $(this).toggleClass("mshow");
});


$(".f2").click(function(){
	a=$(this).text();
    $("#f2 input[type=hidden]").val(a);
});
$(".f3").click(function(){
	a=$(this).text();
    $("#f2 input[type=hidden]").val(a);
});
//carousel
$('.karusel').owlCarousel({
    nav: false,
    navText: "",
    items: 1,
    mouseDrag: false,
    touchDrag: false,
    URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash'
});

$('.karusel2, .karusel3').owlCarousel({
    nav: true,
    navText: "",
    items: 1,

});

$('.works').owlCarousel({
    nav: true,

    navText: "",
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoWidth:true,
    responsive: {

        0: {
            items: 1

        },
        768: {
            items: 3
        },
        992: {
            items: 4
        },
        1200: {

            items: 5
        }

    }
});



//mask
jQuery(function ($) {
    $("input[type='tel']").mask("+7 (999) 999 9999");
});




$("form").submit(function () {

    $.ajax({
        type: "POST",
        url: "js/mail.php",
        data: $(this).serialize()
    }).done(function () {
        e();
        //fbq('track', 'Purchase', {value: '38.00', currency:'USD'});
        //ga('send','pageview','/thanks.html');
        //yaCounter47091528.reachGoal('ZAYAVKA')
    });
    return false;
});



function e() {
    $.fancybox.close();
    $.fancybox.open({
        src: '#thanks',
        type: 'inline',
    });
    $("input[type=text], input[type=tel], textarea").val("");
};

// //map


// function mm() {

//     //map2
//     var map = new ymaps.Map("map", {
//         center: [59.231862, 39.900053],
//         zoom: 14,
//         controls: ["zoomControl"],
//         type: "yandex#map",
//         behaviors: ['drag', 'dblClickZoom']
//     }, {
//         suppressMapOpenBlock: true
//     });

//     map.geoObjects.add(new ymaps.GeoObject({
//         geometry: {
//             type: "Point",
//             coordinates: [59.231862, 39.900053]
//         },
//         properties: {
//             balloonContent: decodeURIComponent("КухнеРады"),
//             iconCaption: decodeURIComponent("КухнеРады"),
//             hintCaption: decodeURIComponent("КухнеРады"),
//         }
//     }, {
//         iconLayout: "default#image",
//         iconImageSize: [64, 64],
//         iconImageOffset: [-32, -64],
//         iconImageHref: "img/loc.svg",
//     }));

// }



