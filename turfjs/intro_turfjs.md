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

![](C:\Projects\presentations\turfjs\img\not_turf.png)

---

![](C:\Projects\presentations\turfjs\img\turflogo.png)![](C:\Projects\presentations\turfjs\img\turflogo.png)![](C:\Projects\presentations\turfjs\img\turflogo.png)![](C:\Projects\presentations\turfjs\img\turflogo.png)![](C:\Projects\presentations\turfjs\img\turflogo.png)![](C:\Projects\presentations\turfjs\img\turflogo.png)
![](C:\Projects\presentations\turfjs\img\turflogo.png)![](C:\Projects\presentations\turfjs\img\turflogo.png)![](C:\Projects\presentations\turfjs\img\turflogo.png)![](C:\Projects\presentations\turfjs\img\turflogo.png)![](C:\Projects\presentations\turfjs\img\turflogo.png)![](C:\Projects\presentations\turfjs\img\turflogo.png)
![](C:\Projects\presentations\turfjs\img\turflogo.png)![](C:\Projects\presentations\turfjs\img\turflogo.png)![](C:\Projects\presentations\turfjs\img\turflogo.png)![](C:\Projects\presentations\turfjs\img\turflogo.png)![](C:\Projects\presentations\turfjs\img\turflogo.png)![](C:\Projects\presentations\turfjs\img\turflogo.png)
![](C:\Projects\presentations\turfjs\img\turflogo.png)![](C:\Projects\presentations\turfjs\img\turflogo.png)![](C:\Projects\presentations\turfjs\img\turflogo.png)![](C:\Projects\presentations\turfjs\img\turflogo.png)![](C:\Projects\presentations\turfjs\img\turflogo.png)![](C:\Projects\presentations\turfjs\img\turflogo.png)

---
## What is it?
	Version 4.4 Released 2017-06-05, 77+ modules

* Lightweight JavaScript geospatial library
* Created by [Morgan Herlocker](https://twitter.com/morganherlocker)
	* [Denis Carriere](https://github.com/DenisCarriere) - Active lead contributor
	* Actively maintained - 56+ contributors
![](C:\Projects\presentations\turfjs\img\turfjs-github.PNG)	
* Open Source - :heart: MIT License :heart:

---
## What is it?
* Complete engine vailable as
	- NPM module - ```npm install @turf/turf```
    - Live link - ```https://npmcdn.com/@turf/turf/turf.min.js```
* Customizable build options available  
* Majority of operations work with [GeoJSON](http://geojson.org/)
---
## GeoJSON
==Geo==graphic ==J==ava==S==cript ==O==bject ==N==otation
	* Superset of JSON
	![](C:\Projects\presentations\turfjs\img\geojson.png)

[Details, details, details](https://macwright.org/2015/03/23/geojson-second-bite.html) and [RFC 7946](https://tools.ietf.org/html/rfc7946)

---
## GeoJSON - Common types
Point
LineString
Polygon
MultiPoint
MultiLineString
MultiPolygon
GeometryCollection
Feature
FeatureCollection

---
## ==Example==

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
Build your own if you would like [geojson.io](http://geojson.io)

---
## Project Goals
* Simple - Operations independent functions
	* :earth_africa: -> ==TurfJS Function== -> :earth_americas:
	* Majority of functions work with GeoJSON
* Fast
	* Benchmark code available in each function folder - Example [turf-centroid](https://github.com/Turfjs/turf/tree/master/packages/turf-centroid/bench.js)
* Modular
	* Functions are organized as complete units - examples, types, tests, etc

---
## Common Functions
* Aggregation - turf-average, turf-area, turf-aggregate


---
## Common Functions
* Measurement - Explain, example

turf-distance

---
## Common Functions
* Transformation - Explain, example

turf-intersect, turf-explode

---
## Common Functions
* Data methods - Explain, example

turf-filter

---
## Common Functions
* Interpolation - Explain, example

turf-isobands, turf-point-on-line

---
## Common Functions
* Join - Explain, example

turf-within, turf-tin

---
## Common Functions
* Classification - Explain, example

turf-reclass

---
# Walkthrough

GeoJSON constructors
* Point
* Line
* Polygon
* Feature Collection

---
### Fast

* Local processed, client or server
* Speed test results

---

### Modular

* Example of single component build piece say random

---
# How do I use it?

---
# Example 1

==random(type, count, options)==
```
const points = turf.random('points', 2, { bbox: [-122.3401, 47.5993, -122.3089, 47.6163] });
```

Results

```
{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-122.33333206790134,47.61235696404421]},"properties":{}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-122.32510703154492,47.60679435175362]},"properties":{}}]}
```

---
# Everyone try and share

https://blue-basement.glitch.me/

---
# Example 2
---
# Example 3
---

