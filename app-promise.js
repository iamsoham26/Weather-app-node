// const request = require('request');
const yargs = require('yargs');
const axios = require('axios');
const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help','h')
  .argv;

  var encodeURI = encodeURIComponent(argv.address);
  var getAddress = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI}&key=AIzaSyBxOA5jEiNxp4veqbxmncrOIAaleZYJjKA`;

  axios.get(getAddress).then((response) => {
      if(response.data.status === 'ZERO_RESULTS'){
        console.log(`Not able to find ${argv.address} <-- this address`);
      }
      var latitude = response.data.results[0].geometry.location.lat;
      var longitude = response.data.results[0].geometry.location.lng;
      var getWeather = `https://api.darksky.net/forecast/AIzaSyBxOA5jEiNxp4veqbxmncrOIAaleZYJjKA/${latitude},${longitude}`;
      console.log(response.data.results[0].formatted_address);
      console.log(`lat : ${latitude} and lng : ${longitude}`);
      return axios.get(getWeather);
    }).then((response) => {
          var temperature = response.data.currently.temperature;
          var feelsLike = response.data.currently.apparentTemperature;
          console.log(`Temperature is : ${temperature} and Feels like : ${feelsLike} `);
      }).catch((e) =>{
        if (e.code === 'ENOTFOUND') {
          console.log('Unable to connect to API servers.');
        } else {
          console.log(e.message);
        }
      });
