ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [54.752656, 56.002053],
            zoom: 16
            
        }, {
            searchControlProvider: 'yandex#search'
        }),
        
        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../../imgs/header/header-logo.png',
            // Размеры метки.
            iconImageSize: [95, 30],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-47, -30],
        });
        myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects
        .add(myPlacemark);
});