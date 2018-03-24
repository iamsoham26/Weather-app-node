const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) =>{
      var encodeURI = encodeURIComponent(address);
      request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI}&key=AIzaSyBxOA5jEiNxp4veqbxmncrOIAaleZYJjKA`,
        json: true
      }, (error, response, body) => {
      // console.log(JSON.stringify(response, undefined, 2));
      if(error){
        reject('Unable to connect Google servers');
        //console.log('Unable to connect Google servers');
      }else if(body.status === 'ZERO_RESULTS'){
        reject('Unable to find address');
        //console.log('Unable to find address');
      }else if(body.status === 'OK'){
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
        //console.log(`Address: ${body.results[0].formatted_address}`)
        //console.log(`Locations | Latitude: ${body.results[0].geometry.location.lat} | Longitude: ${body.results[0].geometry.location.lng}`);
      }
    });
    });
};

geocodeAddress('380061').then((location) =>{
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});
