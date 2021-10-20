const init = () => {
    const myMap = new ymaps.Map("contacts-map", {
        center: [55.75713708738881,37.60172150132741],
        zoom: 16,
        controls: ['geolocationControl', 'zoomControl']
    }, {
        // Зададим опции для элементов управления.
        zoomControlSize: 'small',
        zoomControlPosition: {
            top: '300px',
            right: '50px'
        },
        geolocationControlPosition: {
            bottom: '300px',
            right: '50px'
        }
    });

    const placemark = new ymaps.Placemark([55.75846806898367,37.60108849999989], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/contacts_placemark.png',
        iconImageSize: [20, 20],
        iconImageOffset: [-10, -10],
    });

    // myMap.controls.remove('geolocationControl'); // удаляем геолокацию
    myMap.controls.remove('searchControl'); // удаляем поиск
    myMap.controls.remove('trafficControl'); // удаляем контроль трафика
    myMap.controls.remove('typeSelector'); // удаляем тип
    myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    // myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
    myMap.controls.remove('rulerControl'); // удаляем контрол правил
    myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
    myMap.geoObjects.add(placemark);
}

ymaps.ready(init);