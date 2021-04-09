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