"use strict"

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

