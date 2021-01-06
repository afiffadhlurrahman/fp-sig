mapboxgl.accessToken = "pk.eyJ1IjoiYWZpZmZhZGhsdXJyYWhtYW4iLCJhIjoiY2tqMWQwMzhqM2RqbDJzbHJ4eHNyeTZzdSJ9.dKKWOToI-b0lkO6RispSJg";

// Ganti layer map
var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');
 
function switchLayer(layer) {
  var layerId = layer.target.id;
  map.setStyle('mapbox://styles/mapbox/' + layerId);
}
 
for (var i = 0; i < inputs.length; i++) {
  inputs[i].onclick = switchLayer;
}

var map = new mapboxgl.Map({
    container: "map", // Specify the container ID
    style: 'mapbox://styles/mapbox/streets-v11', // Specify which map style to use
    center: [109.337398,-0.019895], // Specify the starting position [lng, lat]
    zoom: 13 // Specify the starting zoom
});

// nambahin marker
// var marker = new mapboxgl.Marker() // initialize a new marker
//   .setLngLat([109.337398,-0.019895]) // Marker [lng, lat] coordinates
//   .addTo(map); 
  // Add the marker to the map

    // // nambahin search bar
    var coordinatesGeocoder = function (query) {

    // match anything which looks like a decimal degrees coordinate pair
    var matches = query.match(
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
     
    var coord1 = Number(matches[1]);
    var coord2 = Number(matches[2]);
    var geocodes = [];
     
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
     
    map.addControl(
    new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    localGeocoder: coordinatesGeocoder,
    zoom: 6,
    placeholder: '      Search',
    mapboxgl: mapboxgl
    }), 'top-left'
    );


