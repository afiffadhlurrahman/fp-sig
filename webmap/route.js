mapboxgl.accessToken = "pk.eyJ1IjoiYWZpZmZhZGhsdXJyYWhtYW4iLCJhIjoiY2tqMWQwMzhqM2RqbDJzbHJ4eHNyeTZzdSJ9.dKKWOToI-b0lkO6RispSJg";

var map = new mapboxgl.Map({
    container: "map", // Specify the container ID
    style: 'mapbox://styles/mapbox/light-v10', // Specify which map style to use
    center: [-79.4512, 43.6568], // Specify the starting position [lng, lat]
    zoom: 13 // Specify the starting zoom
});

var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    unit: "metric",
    profile: "mapbox/driving",
    alternatives: false,
    geometries: "geojson",
    controls: { instructions: true },
    flyTo: false
  });
  
map.addControl(directions, "top-left");
map.scrollZoom.enable();