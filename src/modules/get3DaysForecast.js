import { tomorrowWeather, afterOneWeather, afterTwoWeather } from './response';
import { OpenWeatherMapApiKey } from '../../environment';


export default async function get3DaysForecast(latitude, longitude) {
  const APIKey = OpenWeatherMapApiKey;
  const URI = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely,current&appid=${APIKey}&units=metric`;

  const response = await fetch(URI);
  let responseBody;
  if (response.ok) {
    responseBody = await response.json();
  } else {
    throw new Error(response.status);
  }

  tomorrowWeather.main = responseBody.daily[1].weather[0].description;
  tomorrowWeather.temperature = Math.round(+responseBody.daily[1].temp.day);
  tomorrowWeather.id = responseBody.daily[1].weather[0].id;
  tomorrowWeather.iconName = responseBody.daily[1].weather[0].icon;

  afterOneWeather.main = responseBody.daily[2].weather[0].description;
  afterOneWeather.temperature = Math.round(+responseBody.daily[2].temp.day);
  afterOneWeather.id = responseBody.daily[2].weather[0].id;
  afterOneWeather.iconName = responseBody.daily[2].weather[0].icon;

  afterTwoWeather.main = responseBody.daily[3].weather[0].description;
  afterTwoWeather.temperature = Math.round(+responseBody.daily[3].temp.day);
  afterTwoWeather.id = responseBody.daily[3].weather[0].id;
  afterTwoWeather.iconName = responseBody.daily[3].weather[0].icon;
}

// class ThreeDaysForecast {
//   constructor() {
//     this.APIKey = OpenWeatherMapApiKey;
//   }

//   async getForecast(latitude, longitude) {
//     this.URI = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely,current&appid=${this.APIKey}&units=metric`;
//     const response = await fetch(this.URI);
//     let responseBody;
//     if (response.ok) {
//       responseBody = await response.json();
//     } else {
//       throw new Error(response.status);
//     }
//   }

// }
