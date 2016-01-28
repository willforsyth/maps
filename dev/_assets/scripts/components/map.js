/*global $ */
$.fn.map = function (options) {
    'use strict';
    L.mapbox.accessToken = 'pk.eyJ1Ijoid2lsbGZvcnN5dGgiLCJhIjoiY2lqeWhscDdiMDAzd3ZrbHprN2poMnhlaCJ9.hc918DgPGptV-adaIK8xGg';
    // Here we don't use the second argument to map, since that would automatically
    // load in non-clustered markers from the layer. Instead we add just the
    // backing tileLayer, and then use the featureLayer only for its data.
    var map = L.mapbox.map('map')
        .setView([38.9, -77], 13)
        .addLayer(L.mapbox.tileLayer('mapbox.streets'));

    var overlays = L.layerGroup().addTo(map);

    // we create the 'layers' variable outside of the on('ready' callback
    // so that it can be accessible in the showStations function. Otherwise,
    // JavaScript scope would prevent you from accessing it.
    var layers;

    // Since featureLayer is an asynchronous method, we use the `.on('ready'`
    // call to only use its marker data once we know it is actually loaded.
    L.mapbox.featureLayer()
        .loadURL('/json/stations.geojson')
        .on('ready', function(e) {
            layers = e.target;
            showStations();
        });

    var filters = document.getElementById('colors').filters;

    // There are many ways to filter data. Mapbox.js has the .setFilter method,
    // but it only applies to L.mapbox.featureLayer layers, and that isn't what
    // we're creating - we're making marker groups in a MarkerClusterGroup layer.
    // Thus we distill filtering down to its essential part: an 'if' statement
    // in a loop.
    function showStations() {
        // first collect all of the checked boxes and create an array of strings
        // like ['green', 'blue']
        var list = [];
        for (var i = 0; i < filters.length; i++) {
            if (filters[i].checked) list.push(filters[i].value);
        }
        // then remove any previously-displayed marker groups
        overlays.clearLayers();
        // create a new marker group
        var clusterGroup = new L.MarkerClusterGroup().addTo(overlays);
        // and add any markers that fit the filtered criteria to that group.
        layers.eachLayer(function(layer) {
            if (list.indexOf(layer.feature.properties.line) !== -1) {
                clusterGroup.addLayer(layer);
            }
        });
    }

};
