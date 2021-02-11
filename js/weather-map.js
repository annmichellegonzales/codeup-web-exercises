let initLat = 29.4241;
let initLng = -98.4936;
displayContent(initLat, initLng);

// retrieves information from the api, uses personal token
function displayContent(lat, lng) {
    $.get("https://api.openweathermap.org/data/2.5/onecall", {
        APPID: OWM_TOKEN,
        lat: lat,
        lon: lng,
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
        dayHtml += "<li class='list-group-item text-center'>" + "High Temperature: " + day[i].temp.max + "℉" + "</li>";
        dayHtml += "<li class='list-group-item text-center'>" + "Low Temperature: " + day[i].temp.min + "℉" + "</li>";
        dayHtml += "</ul>";
        dayHtml += "</div>";
        html += dayHtml;
    }
    $("#weather").html(html);
}


// displays map to page
mapboxgl.accessToken = MAPBOX_TOKEN;
var coordinates = document.getElementById('coordinates'); //uses entered coordinates
var map = new mapboxgl.Map({
    container: 'mapbox-map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', //stylesheet location
    center: [-98.49, 29.42], // starting position
    zoom: 9 // starting zoom
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());


// adding marker to map, able to drag
var marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([initLng, initLat])
    .addTo(map);





function onDragEnd() {
    var lngLat = marker.getLngLat();
    lng = lngLat.lng;
    lat = lngLat.lat;
    reverseGeocode(lngLat, MAPBOX_TOKEN).then(function (result){
        input.val(result);
    })
    displayContent();
}

marker.on('dragend', onDragEnd);


$("#button").click(function (e) {
    e.preventDefault();
    geocode($("#input").val(), MAPBOX_TOKEN).then(function (data) {
        displayWeather(data[0], data[1]);
        map.flyTo({
            center: [data[0], data[1]],
            essential: true,
            zoom: 5
        });
        marker.setLngLat([data[0], [data][1]]);
        marker.addTo(map);
    })
});

function geocoderEventPrep(e) {
    if (e.target.className.indexOf('mapboxgl-ctrl-geocoder--input') !== -1) {
        console.log(e.target.value);
        geocode(e.target.value, MAPBOX_TOKEN).then(function (data) {
            longitude = data[0];
            latitude = data[1];
            console.log(latitude);
            console.log(longitude);

            displayContent();
        });
    }
}
//
document.addEventListener('change', geocoderEventPrep);
//
// function onDragEnd() {
//     var lngLat = marker.getLngLat();
//     coordinates.style.display = 'block';
//     coordinates.innerHTML =
//         'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
// }
//
