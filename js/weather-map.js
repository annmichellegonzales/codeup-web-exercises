"use strict"



// // creates display for html using the weather id
//         function displayWeather(data) {
//             let day = data.daily;
//             let html = '';
//             for (let i = 0; i < 5; i++) {
//                 console.log(day[i]);
//                 let weatherIcon = day[i].weather[0].icon;
//                 let unixTime = day[i].dt;
//                 let date = new Date(unixTime * 1000);
//                 let date1 = date.toLocaleDateString("en-US", {weekday: 'long'});
//                 let dayHtml = "<div class='card' style='width: 18rem'>";
//                 dayHtml += "<div class='card-header'>" + date1 + "</div>";
//                 dayHtml += "<ul class='list-group list-group-flush'>";
//                 dayHtml += "<li class='list-group-item text-center'>" + "<img src='https://openweathermap.org/img/w/" + weatherIcon + ".png'" + "</li>";
//                 dayHtml += "<li class='list-group-item text-center'>" + "High Temperature: " + Math.round(day[i].temp.max) + "℉" + "</li>";
//                 dayHtml += "<li class='list-group-item text-center'>" + "Low Temperature: " + Math.round(day[i].temp.min) + "℉" + "</li>";
//                 dayHtml += "</ul>";
//                 dayHtml += "</div>";
//                 html += dayHtml;
//             }
//             $("#weather").html(html); //connects to div with id of weather
//         }


        var lat = 29.4241;
        var lng = -98.4936;

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
                    $("#current").text("Current Location: " + data)
                })
                console.log(data);

                let html = '';
                for (let i = 0; i < 5; i++) {
                    let icon = data.daily[i].weather[0].icon
                    let unixTime = data.daily[i].dt;
                    let date = new Date(unixTime * 1000);
                    let date1 = date.toLocaleDateString("en-US")
                    html += "<div class='card' style='width: 15rem'>"
                    html += "<div class='card-header'>" + date1 + "</div>"
                    html += "<ul class='list-group list-group-flush'>"
                    html += "<li class='list-group-item text-center'>" + data.daily[i].temp.max + "℉" + ' / ' + data.daily[i].temp.min + "℉" + "<br>" + "<img src='http://openweathermap.org/img/wn/" + icon + ".png'>" + "</li>"
                    html += "<li class='list-group-item text-center'>" +
                        "description: " + "<strong>" + data.daily[i].weather[0].description + "</strong>" + "<br>" +
                        "Humidity: " + "<strong>" + data.daily[i].humidity + "</strong>" + "</li>"
                    html += "<li class='list-group-item text-center'>" + "Wind: " + "<strong>" + data.daily[i].wind_speed + "</strong>" + "</li>"
                    html += "<li class='list-group-item text-center'>" + "Pressure: " + "<strong>" + data.daily[i].pressure + "</strong>" + "</li>"
                    html += "</ul>"
                    html += "</div>"
                }
                $("#weather").html(html)

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

        var marker = new mapboxgl.Marker({
            draggable: true
        })
            .setLngLat([lng, lat])
            .addTo(map)

        function onDragEnd() {
            var lngLat = marker.getLngLat();
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


// function displayMapToPage(lng, lat) {
//     mapboxgl.accessToken = MAPBOX_TOKEN;
// // var coordinates = document.getElementById('coordinates'); //uses entered coordinates
//     let map = new mapboxgl.Map({
//         container: 'mapbox-map', // container id
//         style: 'mapbox://styles/mapbox/streets-v11', //stylesheet location
//         center: [lng, lat], // starting position
//         zoom: 9 // starting zoom
//     });
//
// }
//
//
// function searchWeather() {
//
// }


// let coordinatesGeocoder = function (query) {
// // Match anything which looks like
// // decimal degrees coordinate pair.
//     let matches = query.match(
//         /^[ ]*(?:Lat: )?(-?\d+\.?\d*)[, ]+(?:Lng: )?(-?\d+\.?\d*)[ ]*$/i
//     );
//     if (!matches) {
//         return null;
//     }
//
// function coordinateFeature(lng, lat) {
//     return {
//         center: [lng, lat],
//         geometry: {
//             type: 'Point',
//             coordinates: [lng, lat]
//         },
//         place_name: 'Lat: ' + lat + ' Lng: ' + lng,
//         place_type: ['coordinate'],
//         properties: {},
//         type: 'Feature'
//     };
// }
//
//     let coord1 = Number(matches[1]);
//     let coord2 = Number(matches[2]);
//     let geocodes = [];
//
//     if (coord1 < -90 || coord1 > 90) {
// // must be lng, lat
//         geocodes.push(coordinateFeature(coord1, coord2));
//     }
//
//     if (coord2 < -90 || coord2 > 90) {
// // must be lat, lng
//         geocodes.push(coordinateFeature(coord2, coord1));
//     }
//
//     if (geocodes.length === 0) {
// // else could be either lng, lat or lat, lng
//         geocodes.push(coordinateFeature(coord1, coord2));
//         geocodes.push(coordinateFeature(coord2, coord1));
//     }
//
//     return geocodes;
// };
