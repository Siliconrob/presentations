// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

function removeFeatures() {
  window.theMap.eachLayer(function (layer) {
    if (layer instanceof window.L.TileLayer === false) {
      window.theMap.removeLayer(layer);
    }
  });
};

function customFeature(feature, layer) {
  console.log(feature);
};

function addFeatures(geojson) {
  const newLayers = window.L.geoJSON(geojson, {
    onEachFeature: customFeature
  }).addTo(window.theMap);
  window.theMap.fitBounds(newLayers.getBounds());
};

function setFeatures(geojson) {
  removeFeatures();
  addFeatures(geojson);
};

$(function() {
  console.log('hello world :o');
  $('form').submit(function(event) {
    event.preventDefault();
    const textInput = $('input').val() || {};
    const data = $.param({inputGeoJSON: textInput});
    console.log(data);
    $.post('/simplify?' + data, function(results) {
      setFeatures(results);
      $('<li></li>').text(JSON.stringify(results)).appendTo('ul#results');
    });
  });
});
