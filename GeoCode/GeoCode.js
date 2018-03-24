const request = require('request');

var geocodeAddress = (address, callback) => {
    var encodeURI = encodeURIComponent(address);
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI}&key=AIzaSyBxOA5jEiNxp4veqbxmncrOIAaleZYJjKA`,
      json: true
    }, (error, response, body) => {
    // console.log(JSON.stringify(response, undefined, 2));
    if(error){
      callback('Unable to connect Google servers');
      //console.log('Unable to connect Google servers');
    }else if(body.status === 'ZERO_RESULTS'){
      callback('Unable to find address');
      //console.log('Unable to find address');
    }else if(body.status === 'OK'){
      callback(undefined,{
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
      //console.log(`Address: ${body.results[0].formatted_address}`)
      //console.log(`Locations | Latitude: ${body.results[0].geometry.location.lat} | Longitude: ${body.results[0].geometry.location.lng}`);
    }
  });
}

//63f8a241562df1d19dd1855067271e84

module.exports.geocodeAddress = geocodeAddress;
