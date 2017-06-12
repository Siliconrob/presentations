<!-- $theme: gaia -->
<!-- footer: TurfJS - Modular GeoSpatial Engine  -->
<!-- template: invert -->

# ==TurfJS== :earth_americas: 

---

# ==ME==

### :boom: Write software :boom:

### Trying to learn and improve :thumbsup:

### <siliconrob@siliconheaven.net> :mailbox_with_mail:

---
## ==Not this==

![](https://siliconrob.github.io/github-web/turfjs/img/not_turf.png)

---

![](https://siliconrob.github.io/github-web/turfjs/img/turflogo.png)![](https://siliconrob.github.io/github-web/turfjs/img/turflogo.png)![](https://siliconrob.github.io/github-web/turfjs/img/turflogo.png)![](https://siliconrob.github.io/github-web/turfjs/img/turflogo.png)![](https://siliconrob.github.io/github-web/turfjs/img/turflogo.png)![](https://siliconrob.github.io/github-web/turfjs/img/turflogo.png)
![](https://siliconrob.github.io/github-web/turfjs/img/turflogo.png)![](https://siliconrob.github.io/github-web/turfjs/img/turflogo.png)![](https://siliconrob.github.io/github-web/turfjs/img/turflogo.png)![](https://siliconrob.github.io/github-web/turfjs/img/turflogo.png)![](https://siliconrob.github.io/github-web/turfjs/img/turflogo.png)![](https://siliconrob.github.io/github-web/turfjs/img/turflogo.png)
![](https://siliconrob.github.io/github-web/turfjs/img/turflogo.png)![](https://siliconrob.github.io/github-web/turfjs/img/turflogo.png)![](https://siliconrob.github.io/github-web/turfjs/img/turflogo.png)![](https://siliconrob.github.io/github-web/turfjs/img/turflogo.png)![](https://siliconrob.github.io/github-web/turfjs/img/turflogo.png)![](https://siliconrob.github.io/github-web/turfjs/img/turflogo.png)
![](https://siliconrob.github.io/github-web/turfjs/img/turflogo.png)![](https://siliconrob.github.io/github-web/turfjs/img/turflogo.png)![](https://siliconrob.github.io/github-web/turfjs/img/turflogo.png)![](https://siliconrob.github.io/github-web/turfjs/img/turflogo.png)![](https://siliconrob.github.io/github-web/turfjs/img/turflogo.png)![](https://siliconrob.github.io/github-web/turfjs/img/turflogo.png)

---
## ==What is it?==
	Version 4.4 Released 2017-06-05, 77+ modules

* ==Lightweight== JavaScript geospatial library
* Created by [Morgan Herlocker](https://twitter.com/morganherlocker)
	* [Denis Carriere](https://github.com/DenisCarriere) - Active lead contributor
	* Actively maintained - 56+ contributors
![](https://siliconrob.github.io/github-web/turfjs/img/turfjs-github.PNG)	
* ==Open Source== - :heart: MIT License :heart:

---
## ==What is it?==
* ==Complete== engine available as
	- NPM module - ```npm install @turf/turf```
    - Live link - ```https://npmcdn.com/@turf/turf/turf.min.js```
* ==Customizable== build options available  
* ==Majority== of operations work with [GeoJSON](http://geojson.org/)

---
## ==TurfJS Goals==
* ==Simple== - Operations as independent functions
	* :earth_africa: -> ==TurfJS Function== -> :earth_americas:
	* Majority of functions work with GeoJSON
* ==Fast==
	* Benchmark code available in each function folder - Example [turf-centroid](https://github.com/Turfjs/turf/tree/master/packages/turf-centroid/bench.js)
* ==Modular==
	* Functions are organized as complete units - examples, types, tests, etc

---
## ==Implementation Notes==

* ==JavaScript== - Language of the modern web
	* Isomorphic - Code is the same server/client pick best location based on data
* ==Respect== your data
	* GeoJSON datasets are often large if you need speed use the Node library on the server
* ==Understand== your client and environments
	* Browsers, Web Servers, Connectivity
---
## ==GeoJSON==
==Geo==graphic ==J==ava==S==cript ==O==bject ==N==otation

* Superset of JSON
![](https://siliconrob.github.io/github-web/turfjs/img/geojson.png)


[Details, details, details](https://macwright.org/2015/03/23/geojson-second-bite.html) and [RFC 7946](https://tools.ietf.org/html/rfc7946)

---
## ==Example==

[Seattle City Center](https://github.com/Siliconrob/presentations/blob/master/turfjs/data/seattle.geojson) - Renders from GitHub

```
{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [-122.3321, 47.6062]
  },
  "properties": {
    "name": "Seattle"
  }
}
```

Build your own tool [geojson.io](http://geojson.io)

---
## ==GeoJSON==

## Common types from turf-helpers
```    
Point, Polygon, LineString, FeatureCollection,
Feature, MultiLineString, MultiPoint,
MultiPolygon, GeometryCollection
```

Format
```
const result = turf.[theType](
[coordinates],
[properties]);
```

---
## ==GeoJSON==
    
==Point== Example
```
const point = turf.point(
[-122.3321, 47.6062],
{ name: 'Seattle' });
```

Creates a point at coordinates [==latitude==, ==longitude==] with a name attribute of '==Seattle=='

[Example](https://siliconrob.github.io/github-web/turfjs/turf-point.html)

---
## ==GeoJSON - Common types==
LineString
```
const line = turf.lineString([
  [-122.3321, 47.6062], [-122.3321, 47.8062]
], { name: 'Seattle Line' });
```

Creates a point at coordinates [==latitude==, ==longitude==] with a name attribute of '==Seattle Line=='

[Example](https://siliconrob.github.io/github-web/turfjs/turf-lineString.html)

---
## ==GeoJSON - Common types==
Polygon
```
const poly = turf.polygon([
  [
    [-122.38,47.57], [-122.28,47.57],
    [-122.28,47.62], [-122.38,47.62],
    [-122.38,47.57]
  ]
], { name: 'Seattle Box' });
```

[Example](https://siliconrob.github.io/github-web/turfjs/turf-polygon.html)


---
## ==GeoJSON - Common types==
FeatureCollection

```
const fc = turf.featureCollection([
  turf.point([-122.33136, 47.59909], {name: 'Seattle'}),
  turf.polygon(
  [
   [
    [-122.38,47.57], [-122.28,47.57],
    [-122.28,47.62], [-122.38,47.62],
    [-122.38,47.57]
   ]
  ], { name: 'Seattle Box' })
]);	
```

[Example](https://siliconrob.github.io/github-web/turfjs/turf-featureCollection.html)


---
## ==GeoJSON==

Less common types you might use that are available
* MultiPoint
* MultiLineString
* MultiPolygon
* GeometryCollection
* Feature

---

## ==Common Functions==
* Aggregation
* Measurement
* Transformation
* Data methods
* Interpolation
* Join
* Classification
* Helpers
---

## ==The List==

[Current Packages](https://github.com/Turfjs/turf/tree/master/packages)

---
# ==Walkthrough==

==random(type, count, options)==
```
const points = turf.random('points', 2,
{ bbox: [-122.3401, 47.5993, -122.3089, 47.6163] });
```

Results

```
{"type":"FeatureCollection",
"features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-122.33333206790134,47.61235696404421]},"properties":{}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-122.32510703154492,47.60679435175362]},"properties":{}}]}
```

---
# ==How==

Glitch API example with a map and TurfJS

:hatching_chick: https://blue-basement.glitch.me/ :hatching_chick:

---
# ==Remix Time==
![](https://siliconrob.github.io/github-web/turfjs/img/dj_bluray.jpg)

To make your own copy use the ```Remix this in Glitch``` option at the bottom of the page

Or collaborate with me on mine https://glitch.com/edit/#!/join/fad52299-6d48-47de-837b-3454041d3824

---
# ==How==
Writing the turfjs code in the file ```myTurf.js```

![](https://siliconrob.github.io/github-web/turfjs/img/glitch_details.PNG)


---
# ==What do you want to do?==

* Explode :boom:
* Buffers :white_square_button:
* Distance :straight_ruler:
* Union/Intersect :triangular_ruler:
* Grids - square, triangle, hex :black_joker:
* :smirk_cat: https://www.mapbox.com/blog/60-years-of-tornadoes-with-turf/

---

## Thanks to [MaptimeSEA](https://meetup.com/MaptimeSEA)
![](https://siliconrob.github.io/github-web/turfjs/img/maptimesea.png)

Presentation https://github.com/Siliconrob/presentations/tree/master/turfjs

Recommended local data source
https://data.seattle.gov/


