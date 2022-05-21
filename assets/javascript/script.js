// https://openweathermap.org/api/one-call-api
// https://api.openweathermap.org/data/2.5/onecall?name=seattle&lat=47.60&lon=-122.33&exclude=hourly,daily&appid=a1a8ce0164fccff449e837b45e588649&units=imperial

const submitBtn = document.getElementById('userSubmit');

// createCards = () => {
//   let dailyEl = document.createElement('div');
//   dailyEl.setAttribute('class', 'card grey darken-1 card-content white-text');
//   let dailyCard = document.createElement('div');
//   dailyCard.setAttribute('class', 'card-content white-text');
//   let dailyTemp = document.createElement('p');
//   dailyTemp.textContent = `Temp: ${data.daily[0].temp.day}`;
//   let dailyWind = document.createElement('p');
//   dailyWind.textContent = `Wind Speed: ${data.daily[0].wind_speed}`;
//   let dailyUV = document.createElement('p');
//   dailyUV.textContent = `UV Index: ${data.daily[0].uvi}`

//   dailyCard.append(dailyTemp);
//   dailyCard.append(dailyWind);
//   dailyCard.append(dailyUV);
//   dailyEl.append(dailyCard);
//   document.querySelector('.cardContainer').append(dailyEl);
//   console.log(dailyEl);
// }

grabWeatherData = (lat, lon) => {

  fetch(`https://api.openweathermap.org/data/2.5/onecall?name=seattle&lat=${lat}&lon=${lon}&exclude=hourly&appid=a1a8ce0164fccff449e837b45e588649&units=imperial`)
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
      document.getElementById('uvIndex').textContent = 'UV Index: ' + uvIndex;


      createCards = (day) => {
        let dailyEl = document.createElement('div');
        dailyEl.setAttribute('class', 'card col-2 bg-dark');
        let dailyCard = document.createElement('div');
        dailyCard.setAttribute('class', 'card-content white-text');
        let dailyTemp = document.createElement('p');
        dailyTemp.textContent = `Temp: ${data.daily[day].temp.day}`;
        let dailyWind = document.createElement('p');
        dailyWind.textContent = `Wind Speed: ${data.daily[day].wind_speed}`;
        let dailyUV = document.createElement('p');
        dailyUV.textContent = `UV Index: ${data.daily[day].uvi}`
      
        dailyCard.append(dailyTemp);
        dailyCard.append(dailyWind);
        dailyCard.append(dailyUV);
        dailyEl.append(dailyCard);
        document.querySelector('.cardContainer').append(dailyEl);
        console.log(dailyEl);
      }
      for (let i = 0; i < 5; i++) {
        createCards(i);
      }
    });
}

clickSubmit = () => {


  const userCity = document.getElementById('userCity').value;
  document.getElementById('currentCity').textContent = userCity
  if (userCity == 'Seattle') {
    grabWeatherData(47.60, -122.33)
  } else if (userCity == 'Los Angeles') {
    grabWeatherData(34.052, -118.244)
  } else if (userCity == 'New York') {
    grabWeatherData(40.714, -74.006)
  }

}

submitBtn.addEventListener("click", clickSubmit)