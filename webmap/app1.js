// mapboxgl.accessToken = "sk.eyJ1IjoiYWZpZmZhZGhsdXJyYWhtYW4iLCJhIjoiY2tqMWQyYTV0MDVjZzJ6cGl4Mm5mMTg0ZiJ9.NSf1K7A-9pfs5nlxNtWK2A";
// var map = new mapboxgl.Map({
//     container: "map", // Specify the container ID
//     style: "mapbox://styles/mapbox/light-v10", // Specify which map style to use
//     center: [-0.019895, 109.337398], // Specify the starting position [lng, lat]
//     zoom: 11 // Specify the starting zoom
// });

// var mymap = L.map('mapid').setView([-0.019895, 109.337398], 13);

// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=sk.eyJ1IjoiYWZpZmZhZGhsdXJyYWhtYW4iLCJhIjoiY2tqMWQyYTV0MDVjZzJ6cGl4Mm5mMTg0ZiJ9.NSf1K7A-9pfs5nlxNtWK2A', {
//     maxZoom: 18,
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
//         'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1
// }).addTo(mymap);

// L.marker([-0.019895, 109.337398]).addTo(mymap)
//     .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

// L.circle([-0.04672, 109.35511], 500, {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5
// }).addTo(mymap).bindPopup("I am a circle.");

// L.polygon([
// 	[51.509, -0.08],
// 	[51.503, -0.06],
// 	[51.51, -0.047]
// ]).addTo(mymap).bindPopup("I am a polygon.");

// var searchControl = new L.esri.Controls.Geosearch().addTo(mymap);

// var results = new L.LayerGroup().addTo(mymap);

// searchControl.on('results', function(data){
//     results.clearLayers();
//     for (var i = data.results.length - 1; i >= 0; i--) {
//     results.addLayer(L.marker(data.results[i].latlng));
//     }
// });

// var popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(mymap);
// }

// mymap.on('click', onMapClick);