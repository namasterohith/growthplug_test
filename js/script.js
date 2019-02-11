// The latitude and longitude of your business / place

function showGMaps(id) {


    var mymap = L.map(id).setView([51.505, -0.09], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox.streets'
    }).addTo(mymap);
}

$(document).ready(function() {

    showGMaps('location-maps-1');
    showGMaps('location-maps-2');
    showGMaps('location-maps-3');

    $('.modal#bookingModal .three .input-group span').click(function() {
        $(this).toggleClass('active');
    });

    $('.book-btn').click(function() {
        setTimeout(function() {
            showGMaps('booking-maps-1');
            showGMaps('booking-maps-2');
            showGMaps('booking-maps-3');
        }, 500);
    });

});