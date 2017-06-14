const turf = require('turf');

// TurfJS Documentation
// http://turfjs.org/docs/

module.exports = {  
  simplify: (inputGeoJSON) => {    
    console.log(inputGeoJSON);
        const results = turf.simplify(inputGeoJSON, .5);
    return Object.freeze([inputGeoJSON, results]);
  }
};
