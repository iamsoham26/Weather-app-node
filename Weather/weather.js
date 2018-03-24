const request = require('request');

var getWeather = (latitude, longitude, key, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${key}/${latitude},${longitude}`,
    json: true
  }, (error, response, body) => {
    if(error){
      callback('not able to connect Forecast.io server');
      //console.log('not able to connect Forecast.io server');
    } else if(response.statusCode === 400){
      callback('Latitude or Longitude are wrong');
    //  console.log('Latitude or Longitude are wrong');
    } else{
      callback(undefined,
        {
          temperature: body.currently.temperature,
          feelsLike : body.currently.apparentTemperature
        });
      // console.log(`temperature is: ${body.currently.temperature}`);
    }
  });
}

module.exports.getWeather = getWeather;
