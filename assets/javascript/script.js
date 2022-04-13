// https://openweathermap.org/api/one-call-api
// https://api.openweathermap.org/data/2.5/onecall?name=seattle&lat=47.60&lon=-122.33&exclude=hourly,daily&appid=a1a8ce0164fccff449e837b45e588649&units=imperial




fetch('https://api.openweathermap.org/data/2.5/onecall?name=seattle&lat=47.60&lon=-122.33&exclude=hourly&appid=a1a8ce0164fccff449e837b45e588649&units=imperial')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
      console.log(data);
    console.log(data.current.temp);

    let temp = data.current.temp;
    document.getElementById('temperature').textContent = 'Temperature: ' + temp + ' Fahrenheit';
    
    let wind = data.current.wind_speed;
    document.getElementById('wind').textContent = 'Wind speed: ' + wind + ' Mph';

    let humid = data.current.humidity;
    document.getElementById('humidity').textContent = 'Humidity: ' + humid + '%';

    let weatherDesc = data.current.weather[0].description;
    document.getElementById('weatherDesc').textContent = 'Weather is currently like: ' + weatherDesc + '.'

    let uvIndex = data.current.uvi;
    document.getElementById('uvIndex').textContent = 'UV Index: ' + uvIndex
  });