"use strict"

// creating variables for the lat and lon to display upon starting the page
let initLat = 29.4241;
let initLng = -98.4936;
displayContent(initLat, initLng);

// retrieves information from the api, uses personal token
function displayContent(initLat, initLng) {
    $.get("https://api.openweathermap.org/data/2.5/onecall", {
        APPID: OWM_TOKEN,
        lat: initLat,
        lon: initLng,
        units: "imperial",
        exclude: "minutely, hourly",
    }).done(function (data) {
        console.log(data);
        displayWeather(data);
    });
}

// creates display for html using the weather id
function displayWeather(data) {
    let day = data.daily;
    let html = '';
    for (let i = 0; i < 5; i++) {
        console.log(day[i]);
        let weatherIcon = day[i].weather[0].icon;
        let unixTime = day[i].dt;
        let date = new Date(unixTime * 1000);
        let date1 = date.toLocaleDateString("en-US");
        let dayHtml = "<div class='card' style='width: 18rem'>";
        dayHtml += "<div class='card-header'>" + date1 + "</div>";
        dayHtml += "<ul class='list-group list-group-flush'>";
        dayHtml += "<li class='list-group-item text-center'>" + "<img src='https://openweathermap.org/img/w/" + weatherIcon + ".png'" + "</li>";
        dayHtml += "<li class='list-group-item text-center'>" + "High Temperature: " + Math.round(day[i].temp.max) + "℉" + "</li>";
        dayHtml += "<li class='list-group-item text-center'>" + "Low Temperature: " + Math.round(day[i].temp.min) + "℉" + "</li>";
        dayHtml += "</ul>";
        dayHtml += "</div>";
        html += dayHtml;
    }
    $("#weather").html(html); //connects to div with id of weather
}


// displays map to page
mapboxgl.accessToken = MAPBOX_TOKEN;
// var coordinates = document.getElementById('coordinates'); //uses entered coordinates
let map = new mapboxgl.Map({
    container: 'mapbox-map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', //stylesheet location
    center: [-98.49, 29.42], // starting position
    zoom: 9 // starting zoom
});







// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());


// adding marker to map, able to drag
let marker = new mapboxgl.Marker({
    draggable: true
})
    // .setLngLat([initLng, initLat]);
    // .addTo(map);







let coordinatesGeocoder = function (query) {
// Match anything which looks like
// decimal degrees coordinate pair.
    let matches = query.match(
        /^[ ]*(?:Lat: )?(-?\d+\.?\d*)[, ]+(?:Lng: )?(-?\d+\.?\d*)[ ]*$/i
    );
    if (!matches) {
        return null;
    }

    function coordinateFeature(lng, lat) {
        return {
            center: [lng, lat],
            geometry: {
                type: 'Point',
                coordinates: [lng, lat]
            },
            place_name: 'Lat: ' + lat + ' Lng: ' + lng,
            place_type: ['coordinate'],
            properties: {},
            type: 'Feature'
        };
    }

    let coord1 = Number(matches[1]);
    let coord2 = Number(matches[2]);
    let geocodes = [];

    if (coord1 < -90 || coord1 > 90) {
// must be lng, lat
        geocodes.push(coordinateFeature(coord1, coord2));
    }

    if (coord2 < -90 || coord2 > 90) {
// must be lat, lng
        geocodes.push(coordinateFeature(coord2, coord1));
    }

    if (geocodes.length === 0) {
// else could be either lng, lat or lat, lng
        geocodes.push(coordinateFeature(coord1, coord2));
        geocodes.push(coordinateFeature(coord2, coord1));
    }

    return geocodes;
};

// Add the control to the map.
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        localGeocoder: coordinatesGeocoder,
        zoom: 4,
        placeholder: 'Try: -40, 170',
        mapboxgl: mapboxgl
    })
);
