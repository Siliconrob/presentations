const express = require('express');
const app = express();
const myTurf = require('./myTurf');

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post("/simplify", function (request, response) {  
  const input = request.query.inputGeoJSON;
  console.log(`GeoJSON received: ${input}`);  
  const asGeoJSON = JSON.parse(input);  
  const results = myTurf.simplify(asGeoJSON);
  response.send(results);
});

const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
