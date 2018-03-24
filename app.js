const request = require('request');
const yargs = require('yargs');
const geocode = require('./GeoCode/GeoCode.js');
const weather = require('./Weather/weather.js');
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

  geocode.geocodeAddress(argv.address, (errorMesage, result) => {
    if(errorMesage){
      console.log(errorMesage);
    }else{
      console.log(result.address);
      weather.getWeather(result.latitude, result.longitude, '63f8a241562df1d19dd1855067271e84', (errorMsg, resultWeather) => {
        if(errorMsg){
          console.log(errorMsg);
        }else{
          console.log(`Temperature is : ${resultWeather.temperature}`); console.log(`feels like : ${resultWeather.apparentTemperature}`);
          // console.log(JSON.stringify(resultWeather.temperature, undefined, 2));
        }
      });
      //console.log(JSON.stringify(result, undefined, 2));
    }
  });
  //console.log(argv);

  //
  // request({
  //   url: 'https://api.darksky.net/forecast/63f8a241562df1d19dd1855067271e84/23.024349,72.5301521',
  //   json: true
  // }, (error, response, body) => {
  //   if(error){
  //     console.log('not able to connect Forecast.io server');
  //   } else if(response.statusCode === 400){
  //     console.log('Latitude or Longitude are wrong');
  //   } else{
  //     console.log(`temperature is: ${body.currently.temperature}`);
  //   }
  // });
