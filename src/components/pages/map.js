var tiles = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});
var latlng = L.latLng(52.00, 10.00);

var map = L.map('map', { center: latlng, zoom: 4, layers: [tiles] });

map.scrollWheelZoom.disable();

var markers = L.markerClusterGroup({
    maxClusterRadius: 25,
    singleMarkerMode: true,
    showCoverageOnHover: false,
}
);

for (var i = 0; i < addressPoints.length; i++) {
    var a = addressPoints[i];
    var title = a[2];
    var marker = L.marker(new L.LatLng(a[0], a[1]), { title: title });
    marker.bindPopup(title);
    markers.addLayer(marker);
}

map.addLayer(markers);
