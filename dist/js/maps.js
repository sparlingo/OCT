require('./mystyles.scss');

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1Ijoic3BhcmxpbmdvIiwiYSI6ImNqdnowZW51OTBsaDI0OGxzN21ub2xuYWYifQ.PiX_bGKhKwLyVNqcE1nIqQ';
var map = new mapboxgl.Map({
    container: 'mainMap',
    style: 'mapbox://styles/mapbox/streets-v11'
});