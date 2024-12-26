document.addEventListener("DOMContentLoaded", () => {
    const universityCoords = [42.053889, 48.278449]; // Координаты музея
    
    // Проверяем, поддерживается ли геолокация в браузере
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userCoords = [position.coords.latitude, position.coords.longitude];
                // ИнициализацияЯндекс
                ymaps.ready(() => {
                    const map = new ymaps.Map("map-container", {
                        center: userCoords,
                        zoom: 13
                    });
                    //Добавление меток
                    const userPlacemark = new ymaps.Placemark(userCoords, {
                        balloonContent: "Вы здесь"
                    });
                    const universityPlacemark = new ymaps.Placemark(universityCoords, {
                        balloonContent: "Музей"
                    });
                    map.geoObjects.add(userPlacemark);
                    map.geoObjects.add(universityPlacemark);
                    // Расчет расстояния
                    const distance = ymaps.coordSystem.geo.getDistance(userCoords, universityCoords) / 1000;
                    document.getElementById("distance").textContent = `Расстояние от Вас до музея: ${distance.toFixed(2)} км`;
                });
            },
            (error) => {
                console.error("Ошибка при получении геолокации:", error);
                document.getElementById("distance").textContent = "Не удалось получить ваше местоположение.";
            }
        );
    } else {
        document.getElementById("distance").textContent = "Геолокация не поддерживается вашим браузером.";
    }
});
