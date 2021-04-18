"use strict"

//beginning lat, lng
let lat = 29.4243;
let lng = -98.4911;

displayPage();

function displayPage() {
    $.get("https://api.openweathermap.org/data/2.5/onecall", {
        APPID: OWM_TOKEN,
        lat: lat,
        lon: lng,
        units: "imperial",
        exclude: "minutely,hourly"
    }).done(function (data) {
        reverseGeocode({lng, lat}, MAPBOX_TOKEN).then(function (data) {
            $("#current").text("Current Location: " + data )
        })
        console.log(data);

        let weatherHtml = '';
        for (let i = 0; i < 5; i++) {
            let icon = data.daily[i].weather[0].icon
            let unixTime = data.daily[i].dt;
            let date = new Date(unixTime * 1000);
            let date1 = date.toLocaleDateString("en-US", { weekday: 'long'});
            weatherHtml += "<div class='card' style='width: 15rem'>"
            weatherHtml += "<div class='card-header'>" + date1 + "</div>"
            weatherHtml += "<ul class='list-group list-group-flush'>"
            weatherHtml += "<li class='list-group-item text-center'>" + data.daily[i].temp.max + "℉" + ' / ' + data.daily[i].temp.min + "℉" + "<br>" + "<img src='http://openweathermap.org/img/wn/" + icon + ".png'>" + "</li>"
            weatherHtml += "<li class='list-group-item text-center'>" +
                "description: " + "<strong>" + data.daily[i].weather[0].description + "</strong>" + "<br>" +
                "Humidity: " + "<strong>" + data.daily[i].humidity + "</strong>" + "</li>"
            weatherHtml += "<li class='list-group-item text-center'>" + "Wind: " + "<strong>" + data.daily[i].wind_speed + "</strong>" + "</li>"
            weatherHtml += "<li class='list-group-item text-center'>" + "Pressure: " + "<strong>" + data.daily[i].pressure + "</strong>" + "</li>"
            weatherHtml += "</ul>"
            weatherHtml += "</div>"
        }
        $("#display-map").html(weatherHtml)

    });
}

mapboxgl.accessToken = MAPBOX_TOKEN
const map = new mapboxgl.Map({
    container: 'mapbox-map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [lng, lat], // starting position [lng, lat]
    zoom: 10 // starting zoom
});
map.addControl(new mapboxgl.NavigationControl());

let marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([lng, lat])
    .addTo(map)

function onDragEnd() {
    let lngLat = marker.getLngLat();
    lat = lngLat.lat
    lng = lngLat.lng
    reverseGeocode(lngLat, MAPBOX_TOKEN).then(function (data) {
        $("#type-in").val(data)
        $("#current").text("Current Location: " + data)
        displayPage()
    })
}

marker.on('dragend', onDragEnd);

$("#button").click(function (e) {
    e.preventDefault();
    var message = $("#type-in").val()
    geocode(message, MAPBOX_TOKEN).then(function (data) {
        displayPage(data[1], data[0]);
        $("#current").text("Current Location: " + message)
        map.flyTo({
            center: [
                data[0], data[1],
            ],
            essential: true,
            zoom: 8,
        });
        marker.setLngLat([
            data[0], data[1]
        ]);
        marker.addTo(map);
    });
});

function geocode(search, token) {
    let baseUrl = 'https://api.mapbox.com';
    let endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;
        });
}

function reverseGeocode(coordinates, token) {
    let baseUrl = 'https://api.mapbox.com';
    let endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.log(data)
            return data.features[0].place_name;
        });
}